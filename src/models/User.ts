import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface IUser {
	_id: String,
	username: String,
	password: String,
	avatarUrl: String,
	status: String,
	url: String,
    email: String,
    isLoggedIn: boolean
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

// encrypt password using bcrypt conditionally. Only if the user is newly created.
// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user: any = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.methods.generateToken = async function() {
    let user: any = this;
    const token = jwt.sign({ _id: user._id.toString() }, <string>process.env.JWT_SECRET, { expiresIn: '72h' });
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

export default mongoose.model('User', userSchema);
