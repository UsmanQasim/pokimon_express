import { Document } from "mongoose";

export interface ITrainer extends Document {
  name: string;
  username: string;
  password: string;
  img_src?: string;
  pokimons?: Number[];
  created_at: Date;
  updated_at: Date;
  is_deleted?: Boolean | null;
}
