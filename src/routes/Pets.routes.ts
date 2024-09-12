import express from 'express'
import { creationPetController, deltePetController, getAllPetsController, getPetByIdController, getPetsByNameContainingControler, patchPetController } from '../controllers/PetsControllers'

const petsRouter = express.Router()

petsRouter.post("", creationPetController)
petsRouter.get("/:id", getPetByIdController)
petsRouter.get("", getAllPetsController)
petsRouter.delete("", deltePetController)
petsRouter.patch("", patchPetController)

export default petsRouter