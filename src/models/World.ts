import { BinaryLike } from 'crypto';
import mongoose from 'mongoose';
import { IUser } from './User';
export interface IWorld {
	_id: string
	name: string,
	title: string,
	tagline: string,
	status: string,
	avatarUrl: string,
	color: string,
	streamCount: number,
	owner: IUser
}

const worldSchema = new mongoose.Schema({
	_id: String,
	name: String,
	title: String,
	status: String,
	tagline: String,
	avatarUrl: String,
	color: String,
	streamCount: Number,
	owner: String
});

export default mongoose.model('World', worldSchema);
