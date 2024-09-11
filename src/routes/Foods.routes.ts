import  express  from 'express';
import { creationFoodsController, getFoodsByNameController } from '../controllers/FoodController';

const foodsRouter = express.Router()

foodsRouter.post("", creationFoodsController)
foodsRouter.get("", getFoodsByNameController)

export default foodsRouter