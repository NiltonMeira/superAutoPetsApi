import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    Role: Number
})  

export const User = mongoose.model('User', UserSchema)