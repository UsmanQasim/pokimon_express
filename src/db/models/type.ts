import mongoose, { Schema } from "mongoose";
import { ITypes } from "./interfaces/type.interface";

const TypeSchema = new Schema<ITypes>({
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

const typeModel = mongoose.model<ITypes>("Types", TypeSchema);

export default typeModel;
