import { NextFunction, Request, Response } from "express";
import AppError from "../AppError";

export const handleError = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
        res.status(error.statusCode).json({message: error.message})
    }

    console.error(error)
    res.status(500).json({message: "Internal server error"})
}