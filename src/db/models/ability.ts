import mongoose, { Schema } from "mongoose";
import { IAbility } from "./interfaces/ability.interface";

const AbilitySchema = new Schema<IAbility>({
  name: {
    type: String,
    required: true,
  },
  img_src: {
    type: String,
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

const AbilityModel = mongoose.model<IAbility>("Abilities", AbilitySchema);

export default AbilityModel;
