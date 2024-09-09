import { TFoods } from "./FoodsTypes"

export type TPets = {
    Id: string,
    Name: string,
    Ability: string,
    isGoodWith: string[],
    Counters: [string],
    Atack: number,
    heath: number,
    Turn: number,
    const: number,
    RecommendedFoods: TFoods[],
    Img: string

}

export type TPetsCreation = Omit<TFoods, "Id">
export type TPetsUpdate = Partial<TPetsCreation>