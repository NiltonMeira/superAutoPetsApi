import  express  from 'express';
import { creationFoodsController, deleteFoodController, getAllFoodsController, getFoodByIdController, getFoodsByNameController, patchFoodController } from '../controllers/FoodController';

const foodsRouter = express.Router()

foodsRouter.post("", creationFoodsController)
foodsRouter.get("", getFoodByIdController)
foodsRouter.get("/all", getAllFoodsController)
foodsRouter.get("/name", getFoodsByNameController)
foodsRouter.delete("", deleteFoodController)
foodsRouter.patch("", patchFoodController)

export default foodsRouter