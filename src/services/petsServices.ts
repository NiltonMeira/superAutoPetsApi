import AppError from "../AppError";
import { Pets } from "../entities/PetsEnntities";
import { TPetsCreation, TPetsUpdate } from "../types/PetsTypes";

export const creationPetService = async (payload: TPetsCreation) => {
    const newPet = new Pets(payload)
    return await newPet.save()
}

export const getPetByIdService = async (id: string) => {
    const pet = await Pets.findById(id)

    if(!pet) throw new AppError("Pet not found", 404)
    
        return pet
}

export const getAllPetsService = async () => {
    try{
        const pet = await Pets.find({})
        console.log(pet)
    } catch(err){
        throw new AppError("Pet not found", 404)
    }
}

export const getPetsByNameContainingService = async (name: string) => {
    try {
        const pet = await Pets.find(
            { "name": { "$regex": name, "$options": "i" } }
        );
        console.log(pet);
        return pet;
    } catch (error) {
        console.error('Error fetching pet:', error);
        throw error;
    }
}

export const deletePetService = async (id: string) => {
    const pet = await Pets.findById(id)

    if(!pet) throw new AppError("Pet not found", 404)

    await pet.deleteOne()
}

export const patchPetService = async (payload: TPetsUpdate ,id: string) => {
    const pet = await Pets.findById(id)

    if(!pet) throw new AppError("Pet not found", 404)

    pet.set(payload)
    return await pet.save()
}

