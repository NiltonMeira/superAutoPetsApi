import express from 'express'
import { creationPetController, deltePetController, getAllPetsController, getPetByIdController, getPetsByNameContainingControler, patchPetController } from '../controllers/PetsControllers'
import { getFoodsByNameController } from '../controllers/FoodController'

const petsRouter = express.Router()

petsRouter.post("", creationPetController)
petsRouter.get("", getPetByIdController)
petsRouter.get("/all", getAllPetsController)
petsRouter.get("/name", getPetsByNameContainingControler)
petsRouter.delete("", deltePetController)
petsRouter.patch("", patchPetController)

export default petsRouter