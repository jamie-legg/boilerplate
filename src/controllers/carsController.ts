import boom from 'boom';
import Car from '../models/Car';
import { FastifyRequest, FastifyReply, RouteHandlerMethod } from 'fastify';

interface GenericRequest {
	id?: any
}

export const getCars: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const cars = await Car.find();
		return cars;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleCar: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const id = (req.params as GenericRequest).id
		const car = await Car.findById(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const addCar: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const car = new Car(req.body);
		return await car.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const updateCar: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const id = (req.params as GenericRequest).id;
		const car = req.body as any;
		const { ...updateData } = car;
		const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const deleteCar: RouteHandlerMethod = async (req: FastifyRequest, res: FastifyReply): Promise<any> => {
	try {
		const id = (req.params as GenericRequest).id;
		const car = await Car.findByIdAndRemove(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};
