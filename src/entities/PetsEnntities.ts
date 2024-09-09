import mongoose from "mongoose";
import { Foods } from "./FoodsEntitities";

const PetsSchema = new mongoose.Schema({
    Name: String,
    Ability: String,
    isGoodWith: [String],
    Counters: [String],
    Atack: Number,
    heath: Number,
    Turn: Number,
    const: Number,
    RecommendedFoods: [Foods],
    Img: String
    
})

export const Pets = mongoose.model('Pets', PetsSchema)
