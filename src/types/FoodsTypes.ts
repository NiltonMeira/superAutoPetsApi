export type TFoods = {
    Id: string,
    Name: string,
    effect: String,
    turn: number,
    img: string
    
}

export type TFoodsCreation = Omit<TFoods, "Id">
export type TFoodsUpdate = Partial<TFoodsCreation>