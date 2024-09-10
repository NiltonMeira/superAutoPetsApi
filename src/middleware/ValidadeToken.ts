import { NextFunction, Request, Response } from "express";
import AppError from "../AppError";
import { decode, verify } from "jsonwebtoken";

export const validateToken = async(req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization

    if(!auth) throw new AppError("Missing bearer token", 401)

    const [_, token] = auth.split(" ")

    verify(token, "muryloLindo", (error: any, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        res.locals.userId = decoded.sub //send this value in the middleware
        res.locals.email = decoded.email
        res.locals.role = decoded.role
    })

    next()
}

export const validateOwnUser = async (req:Request, res: Response, next: NextFunction) => {

    if(res.locals.userId != req.params.userId && Number(res.locals.role) != 1)
        throw new AppError("You don't have permission for that", 403)
    next()
}