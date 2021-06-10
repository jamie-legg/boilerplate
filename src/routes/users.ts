import { FastifyRequest } from 'fastify';
import FastifyAuth from 'fastify-auth';
import User from '../models/User'

//TODO: fix types in here for custom user model

const usersRoutes = async (fastify:any, opts:any) => {
    fastify
        .decorate('asyncVerifyJWT', async (request: any, reply: any) => {
            try {
                if (!request.headers.authorization) {
                    throw new Error('No token was sent');
                }
                const token = request.headers.authorization.replace('Bearer ', '');
                const user = await (User as any).findByToken(token);
                if (!user) {
                    // handles logged out user with valid token
                    throw new Error('Authentication failed!');
                }
                request.user = user;
                request.token = token; // used in logout route
            } catch (error) {
                reply.code(401).send(error);
            }
        })
        .decorate('asyncVerifyUsernameAndPassword', async (request: any, reply: any) => {
            try {
                if (!request.body) {
                    throw new Error('Credentials were not provided.');
                }
                const user = await (User as any).findByCredentials(request.body.username, request.body.password);
                request.user = user;
            } catch (error) {
                reply.code(400).send(error);
            }
        })
        .register(FastifyAuth)
        .after(() => {
            fastify.route({
                method: [ 'POST', 'HEAD' ],
                url: '/register',
                logLevel: 'warn',
                handler: async (req:any, reply:any) => {
                    const user:any = new User(req.body);
                    try {
                        await user.save();
                        const token = await user.generateToken();
                        reply.status(201).send({ user });
                    } catch (error) {
                        reply.status(400).send(error);
                    }
                }
            });
            
            // login route
            fastify.route({
                method: [ 'POST', 'HEAD' ],
                url: '/login',
                logLevel: 'warn',
                preHandler: fastify.auth([ fastify.asyncVerifyUsernameAndPassword ]),
                handler: async (req:any, reply:any) => {
                    const token = await req.user.generateToken();
                    reply.send({ status: 'You are logged in', user: req.user });
                }
            });
            
            // profile route
            fastify.route({
                method: [ 'GET', 'HEAD' ],
                url: '/user',
                logLevel: 'warn',
                preHandler: fastify.auth([ fastify.asyncVerifyJWT ]),
                handler: async (req:any, reply:any) => {
                    reply.send({ status: 'Authenticated!', user: req.user });
                }
            });
            
            // logout route
            fastify.route({
                method: [ 'POST', 'HEAD' ],
                url: '/logout',
                logLevel: 'warn',
                preHandler: fastify.auth([ fastify.asyncVerifyJWT ]),
                handler: async (req:any, reply:any) => {
                    try {
                        req.user.tokens = req.user.tokens.filter((token:any) => {
                            return token.token !== req.token;
                        });
                        const loggedOutUser = await req.user.save();
                        reply.send({ status: 'You are logged out!', user: loggedOutUser });
                    } catch (e) {
                        reply.status(500).send();
                    }
                }
            });
         });
};
export default usersRoutes;