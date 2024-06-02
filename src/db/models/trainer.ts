import mongoose, { Schema } from "mongoose";
import { ITrainer } from "./interfaces/trainer.interface";

const trainerSchema = new Schema<ITrainer>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img_src: {
    type: String,
  },
  pokimons: {
    type: [Number],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  is_deleted: {
    type: Boolean,
    default: null,
  },
});

const TrainerModel = mongoose.model<ITrainer>("Trainer", trainerSchema);

export default TrainerModel;
