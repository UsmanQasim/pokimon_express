import PokemonModal from "../db/models/pokimon";
import { IPokemon } from "../db/models/interfaces/pokimon.interface";

export const createPokemon = async (
  pokemon: IPokemon
): Promise<IPokemon | null> => {
  try {
    const newPokemon = await PokemonModal.create(pokemon);
    return newPokemon;
  } catch (error) {
    throw new Error("Failed to create Pokemon");
  }
};

export const getAllPokemon = async (): Promise<IPokemon[]> => {
  try {
    const pokemons = await PokemonModal.find();
    return pokemons;
  } catch (error) {
    throw new Error("Failed to retrieve Pokemons");
  }
};

export const getPokemonById = async (id: string): Promise<IPokemon | null> => {
  try {
    const pokemon = await PokemonModal.findById(id);
    if (!pokemon) {
      throw new Error("Pokemon not found");
    }
    return pokemon;
  } catch (error) {
    throw new Error("Failed to retrieve Pokemon");
  }
};

export const updatePokemon = async (
  id: string,
  updatedData: IPokemon
): Promise<IPokemon | null> => {
  try {
    const updatedPokemon = await PokemonModal.findByIdAndUpdate(
      id,
      updatedData
    );

    if (!updatedPokemon) {
      throw new Error("Pokemon not found");
    }
    return updatedPokemon;
  } catch (error) {
    throw new Error("Failed to update Pokemon");
  }
};

export const deletePokemon = async (id: string): Promise<boolean> => {
  try {
    const deletedPokemon = await PokemonModal.findByIdAndDelete(id);
    if (!deletedPokemon) {
      throw new Error("Pokemon not found");
    }
    return true;
  } catch (error) {
    throw new Error("Failed to delete Pokemon");
  }
};
