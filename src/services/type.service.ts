import { ITypes } from "../db/models/interfaces/type.interface";
import TypeModel from "../db/models/type";

export const createType = async (type: ITypes): Promise<ITypes | null> => {
  try {
    const newType = TypeModel.create(type);
    return newType;
  } catch (error) {
    throw new Error("Error Creating new Type");
  }
};

export const getAllTypes = async (): Promise<ITypes[]> => {
  try {
    const types = TypeModel.find();
    return types;
  } catch (error) {
    throw new Error("Error Finding Types");
  }
};

export const getTypeById = async (id: string): Promise<ITypes | null> => {
  try {
    const typeById = TypeModel.findById(id);
    if (!typeById) throw new Error("No Type Found By Id: " + id);
    return typeById;
  } catch (error) {
    throw new Error("Error Find Type By Id: " + id);
  }
};

export const updateType = async (
  id: string,
  type: ITypes
): Promise<ITypes | null> => {
  try {
    const updatedType = TypeModel.findByIdAndUpdate(id, type);
    if (!updateType) throw new Error("Updating Type Failed");
    return updatedType;
  } catch (error) {
    throw new Error("Error Updating Type By Id: " + id);
  }
};

export const deleteType = async (id: string): Promise<boolean> => {
  try {
    const deletedType = TypeModel.findByIdAndUpdate(id);
    if (!deleteType) throw new Error("Failed to delete type by Id: " + id);
    return true;
  } catch (error) {
    throw new Error("Error Deleting Type by Id: " + id);
  }
};
