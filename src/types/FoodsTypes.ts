import { StringExpressionOperatorReturningBoolean } from "mongoose"

export type TFoods = {
    Id: string,
    name: string,
    effect: String,
    turn: number,
    img: StringExpressionOperatorReturningBoolean
    
}

export type TFoodsCreation = Omit<TFoods, "Id">
export type TFoodsUpdate = Partial<TFoodsCreation>