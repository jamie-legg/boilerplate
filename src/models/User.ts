import mongoose from 'mongoose';

export interface IUser {
	_id: String,
	name: String,
	status: String,
	url: String,
    email: String
}

const userSchema = new mongoose.Schema({
	_id: String,
	name: String,
	status: String,
	url: String,
    email: String
});

export default mongoose.model('User', userSchema);
