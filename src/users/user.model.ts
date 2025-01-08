import { Model, Schema, model } from 'mongoose';


const userSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

export const User = model('User', userSchema);