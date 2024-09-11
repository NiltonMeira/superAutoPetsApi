import { Request, Response } from "express";
import { creationFoodsService, findByNameContaining } from "../services/FoodsServices";

export const creationFoodsController = async (req: Request, res: Response) => {
    const service = await creationFoodsService(req.body)
    res.status(201).json(service)
}

export const getFoodController  = async (req: Request, res: Response ) => {
    const service = await findByNameContaining(req.params.foodName)
}

