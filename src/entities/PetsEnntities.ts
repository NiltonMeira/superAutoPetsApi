import mongoose from "mongoose";
import { Food } from "./FoodsEntitities";

const PetsSchema = new mongoose.Schema({
    name: String,
    ability: String,
    isGoodWith: [String],
    counters: [String],
    atack: Number,
    heath: Number,
    turn: Number,
    const: Number,
    img: String
    
})

export const Pets = mongoose.model('Pets', PetsSchema)
