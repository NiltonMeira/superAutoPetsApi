import AppError from "../AppError";
import { Food } from "../entities/FoodsEntitities";
import { TFoodsCreation, TFoodsUpdate } from "../types/FoodsTypes";

export const creationFoodsService = async (payload: TFoodsCreation) => {
    const NewFood = new Food(payload)
    return await NewFood.save()
}

export const getFoodByIdService =  async (id: string) => {
    const food = await Food.findById(id)

    if(!food) throw new AppError("Food not found", 404)
    
    return food
}

export const getAllFoodsService = async () => {
    try{
        const foods = await Food.find({})
        console.log(foods)
        return foods
    } catch(err){
        throw new AppError("Foods not found", 404)
    }
}

export const getFoodsByNameContaining = async (name: string) => {
    console.log(name);
    
    try {
        const food = await Food.find(
            { "name": { "$regex": name, "$options": "i" } }
        );
        console.log(food);
        return food;
    } catch (error) {
        console.error('Error fetching food:', error);
        throw error;
    }
};

export const deleteFoodService  = async (id: string) => {
    const food = await Food.findById(id)

    if(!food) throw new AppError("Food not found", 404)

    await food.deleteOne()
    
}

export const patchFoodService = async (payload: TFoodsUpdate, id: string) => {
    const food = await Food.findById(id)

    if(!food) throw new AppError("Food not found", 404)

    food.set(payload)
    return await food.save()
}



