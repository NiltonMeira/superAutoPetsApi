import { sign } from "jsonwebtoken";
import AppError from "../AppError"
import bcrypt from 'bcrypt';
import { User } from "../entities/UserModel";


type TLogin = {
    email: string,
    password: string
}

export const authService = async (payload: TLogin) => {
    const user = await User.findOne({email: payload.email})

    if(!user) throw new AppError("User not found", 404)

    if(!bcrypt.compareSync(payload.password, user.password!)){
        throw new AppError("Password incorrect", 401)
    }

    return sign(
        {email: user.email, role: user.Role},
        "muryloLindo",
        {subject: user.id, expiresIn: 300000}
    )
    
}