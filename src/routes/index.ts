import * as worldController from '../controllers/worldController';
import { RouteOptions } from 'fastify';
import { AddWorldSchema, GetWorldSchema, GetWorldsSchema, PutWorldSchema, DeleteWorldSchema } from './documentation/worldsApi';

const getWorldsRoute: RouteOptions = {
	method: 'GET',
	url: '/api/world',
	handler: worldController.getWorlds,
	schema: GetWorldsSchema,
};
const getWorldRoute: RouteOptions = {
	method: 'GET',
	url: '/api/world/:id',
	handler: worldController.getSingleWorld,
	schema: GetWorldSchema,
};
const postWorldRoute: RouteOptions = {
	method: 'POST',
	url: '/api/world',
	handler: worldController.addWorld,
	schema: AddWorldSchema,
};
const putWorldRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/world/:id',
	handler: worldController.updateWorld,
	schema: PutWorldSchema,
};
const deleteWorldRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/world/:id',
	handler: worldController.deleteWorld,
	schema: DeleteWorldSchema,
};

const routes = [getWorldsRoute, getWorldRoute, postWorldRoute, putWorldRoute, deleteWorldRoute];

export default routes;
