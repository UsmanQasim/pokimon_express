import { ITrainer } from "../db/models/interfaces/trainer.interface";
import TrainerModel from "../db/models/trainer";

export const createTrainer = async (
  trainer: ITrainer
): Promise<ITrainer | null> => {
  try {
    const newTrainer = await TrainerModel.create(trainer);
    return newTrainer;
  } catch (error) {
    throw new Error("Failed to create Trainer");
  }
};

export const getAllTrainers = async (): Promise<ITrainer[]> => {
  try {
    const trainers = await TrainerModel.find();
    return trainers;
  } catch (error) {
    throw new Error("Failed to fetch All Trainers");
  }
};

export const getTrainerById = async (id: string): Promise<ITrainer | null> => {
  try {
    const trainer = await TrainerModel.findById(id);
    if (!trainer) {
      throw new Error("No trainer found from id: " + id);
    }
    return trainer;
  } catch (error) {
    throw new Error("Error fetching trainer by Id");
  }
};

export const updateTrainer = async (
  id: string,
  updatedData: ITrainer
): Promise<ITrainer | null> => {
  try {
    const updatedTrainer = await TrainerModel.findByIdAndUpdate(
      id,
      updatedData
    );
    if (!updateTrainer) {
      throw new Error("Error Updating this User ");
    }
    return updatedTrainer;
  } catch (error) {
    throw new Error("Error Updating Trainer");
  }
};

export const deleteTrainer = async (id: string): Promise<boolean> => {
  try {
    const deleteTrainer = await TrainerModel.findByIdAndDelete(id);
    if (!deleteTrainer) throw new Error("Failed to delete trainer");
    return true;
  } catch (error) {
    throw new Error("Error deleting trainer ");
  }
};
