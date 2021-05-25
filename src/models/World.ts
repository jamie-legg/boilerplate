import mongoose from 'mongoose';

export interface IWorld {
	_id: string
	name: String,
	title: String,
	color: String,
	streamCount: Number,
}

const worldSchema = new mongoose.Schema({
	name: String,
	title: String,
	color: String,
	streamCount: Number,
});

export default mongoose.model('World', worldSchema);
