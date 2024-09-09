import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})  

export const User = mongoose.model('User', UserSchema)