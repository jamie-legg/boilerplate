import boom from 'boom';
import World from '../models/World';
import { FastifyRequest, FastifyReply, RouteHandlerMethod } from 'fastify';
import { v4 as uuidv4 } from 'uuid';

interface GenericRequest {
	id?: any
}

export const getWorlds: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const worlds = await World.find();
		return worlds;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleWorld: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const id = (req.params as GenericRequest).id
		const world = await World.findById(id);
		return world;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const addWorld: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		(req.body as any)["_id"] = uuidv4();
		const world = new World(req.body);
		return await world.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const updateWorld: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const id = (req.params as GenericRequest).id;
		const world = req.body as any;
		const { ...updateData } = world;
		const update = await World.findByIdAndUpdate(id, updateData, { new: true });
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const deleteWorld: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const id = (req.params as GenericRequest).id;
		const world = await World.findByIdAndDelete(id);
		return world;
	} catch (err) {
		throw boom.boomify(err);
	}
};
