import  express  from 'express';
import { creationFoodsController, deleteFoodController, getAllFoodsController, getFoodByIdController,patchFoodController } from '../controllers/FoodController';
import { validateOwnUser, validateToken } from '../middleware/ValidadeToken';

const foodsRouter = express.Router()

foodsRouter.post("", validateToken, validateToken, creationFoodsController)
foodsRouter.get("/:id", getFoodByIdController)
foodsRouter.get("", getAllFoodsController)
foodsRouter.delete("", validateToken, validateOwnUser, deleteFoodController)
foodsRouter.patch("", patchFoodController)

export default foodsRouter