import mongoose from "mongoose";

export const FoodSchema = new mongoose.Schema({
    Name: String,
    effect: String,
    turn: Number,
    img: String
    
})

export const Food = mongoose.model('Foods', FoodSchema)
