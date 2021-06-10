import fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './routes';
import { Options } from './config/swagger';
import { config } from './config';
import swagger from 'fastify-swagger';
import nextAdapter from 'fastify-nextjs'
const env = process.env.NODE_ENV;
import users from './routes/users';

// Configure App
const app = fastify({ logger: true });

app.register(nextAdapter)
  .after(() => {
	app.next('/')
	app.next('/login')
	app.next('/profile')
  })
 
app.register(swagger, Options);

routes.forEach(route => {
	app.route(route);
});

app.register(users);

const start = async (): Promise<void> => {
	try {
		await app.listen(config.app.port);
		app.swagger();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;

// Configure DB
if (env !== 'test') {
	mongoose
		.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => app.log.info('MongoDB connected...'))
		.catch(err => app.log.error(err));
}
