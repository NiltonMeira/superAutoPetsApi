import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    Name: String,
    effect: String,
    turn: Number,
    img: String
    
})

export const Foods = mongoose.model('Foods', FoodSchema)
