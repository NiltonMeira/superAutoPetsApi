import { Request, Response } from "express";
import { creationPetService, deletePetService, getAllPetsService, getPetByIdService, getPetsByNameContainingService, patchPetService } from "../services/PetsServices";

export const creationPetController = async (req:Request, res: Response) => {
    const service = await creationPetService(req.body)
    res.status(201).json(service)
}

export const getPetByIdController = async (req: Request, res: Response) => {
    const service = await getPetByIdService(req.query.petId as string)
    res.status(200).json(service)
}

export const getAllPetsController = async (req: Request, res: Response) => {
    const service = await getAllPetsService()
    res.status(200).json(service)
}

export const getPetsByNameContainingControler= async (req: Request, res: Response) => {
    const service = await getPetsByNameContainingService(req.query.petName as string)
    res.status(200).json(service)
}

export const deltePetController = async (req: Request, res: Response) => {
    const service = await deletePetService(req.query.petID as string)
    res.status(204).send()
}

export const pathPetController = async (req: Request, res: Response) => {
    const service = await patchPetService(req.body, req.query.petId as string)
    res.status(200).json(service)
}


