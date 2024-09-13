import { Request, Response } from "express";
import { creationUserService, deleteUserService, getUserService, patchUserService } from "../services/userServices";


export const creationUserController = async (req: Request, res: Response) => {
    const service = await creationUserService(req.body)
    console.log(service);
    
    res.status(201).json(service)
}

export const getUserController = async (req: Request, res: Response) => {
    const service = await getUserService(req.params.userId)
    res.status(200).json({...service?.toJSON(), password: undefined})
}

export const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(req.params.userId)
    res.status(204).send()
}

export const patchUserController = async (req: Request, res: Response) => {
    const service = await patchUserService(req.body, req.params.userId)
    res.status(200).json(service)
}