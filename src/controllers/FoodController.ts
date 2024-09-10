import { Request, Response } from "express";
import { creationFoodsService, getFoodByIdService } from "../services/FoodsServices";

export const creationFoodsController = async (req: Request, res: Response) => {
    const service = await creationFoodsService(req.body)
    res.status(201).json(service)
}

export const getFoodByIdController  = async (req: Request, res: Response ) => {

    
    const service = await getFoodByIdService(req.body)
}

