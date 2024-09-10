import bcrypt from 'bcrypt';
import { TUserCreation, TUserUpdate } from "../types/UserTypes";
import AppError from "../AppError";
import { User } from '../entities/UserModel';

export const creationUserService = async (payload: TUserCreation) => {
    const salt = await bcrypt.genSalt(12);
    payload.password = bcrypt.hashSync(payload.password, salt)

    const newUser = new User(payload)
    newUser.Role = 1
    return await newUser.save()
}

export const getUserService =  async (id: string) => {
    const user = await User.findById(id)
    
    if(!user) throw new AppError("User not found", 404)
    
    return user
}

export const deleteUserService = async (id: string) => {
    console.log(id);
    const user = await User.findById(id)
    
    if(!user) throw new AppError("User not found", 404)
    
    await user.deleteOne()

    return "User deleted"
}

export const patchUserService =  async (payload: TUserUpdate, id: string) => {
    const user = await User.findById(id)
    
    if(!user) throw new AppError("User not found", 404)

    user.set(payload)
    await user.save()
    
    return user
}

