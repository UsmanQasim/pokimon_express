import AbilityModel from "../db/models/ability";
import { IAbility } from "../db/models/interfaces/ability.interface";

export const createAbility = async (
  ability: IAbility
): Promise<IAbility | null> => {
  try {
    const newAbility = await AbilityModel.create(ability);
    return newAbility;
  } catch (error) {
    throw new Error("Failed to create Ability");
  }
};

export const getAllAbilities = async (): Promise<IAbility[]> => {
  try {
    const abilities = await AbilityModel.find();
    return abilities;
  } catch (error) {
    throw new Error("Failed to fetch All Abilities");
  }
};

export const getAbilityById = async (id: string): Promise<IAbility | null> => {
  try {
    const ability = await AbilityModel.findById(id);
    if (!ability) throw new Error("No ability found from id: " + id);
    return ability;
  } catch (error) {
    throw new Error("Error fetching ability by Id");
  }
};

export const updateAbility = async (
  id: string,
  updatedData: IAbility
): Promise<IAbility | null> => {
  try {
    const updatedAbility = await AbilityModel.findByIdAndUpdate(
      id,
      updatedData
    );
    if (!updatedAbility) throw new Error("Error Updating this User ");
    return updatedAbility;
  } catch (error) {
    throw new Error("Error Updating Ability");
  }
};

export const deleteAbility = async (id: string): Promise<boolean> => {
  try {
    const deletedAbility = await AbilityModel.findByIdAndDelete(id);
    if (!deletedAbility) throw new Error("Failed to delete ability");
    return true;
  } catch (error) {
    throw new Error("Error deleting ability ");
  }
};
