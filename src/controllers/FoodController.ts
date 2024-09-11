import { getAllFoodsService, getFoodByIdService } from './../services/FoodsServices';
import { Request, Response } from "express";
import { creationFoodsService, getFoodsByNameContaining } from "../services/FoodsServices";

export const creationFoodsController = async (req: Request, res: Response) => {
    const service = await creationFoodsService(req.body)
    res.status(201).json(service)
}

export const getFoodByIdController = async (req: Request, res: Response) => {
    const service = await getFoodByIdService(req.query.foodId as string)
    res.status(200).json(service)
}

export const getAllFoodsController = async (req: Request, res: Response) => {
    const service = await getAllFoodsService()
    res.status(200).json(service)
}

export const getFoodsByNameController  = async (req: Request, res: Response ) => {
    const service = await getFoodsByNameContaining(req.query.foodName as string)
    res.status(200).json(service)
}

