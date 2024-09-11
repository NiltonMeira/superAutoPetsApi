import  express  from 'express';
import { creationFoodsController, getFoodByIdController, getFoodsByNameController } from '../controllers/FoodController';

const foodsRouter = express.Router()

foodsRouter.post("", creationFoodsController)
foodsRouter.get("", getFoodByIdController)
foodsRouter.get("/name", getFoodsByNameController)

export default foodsRouter