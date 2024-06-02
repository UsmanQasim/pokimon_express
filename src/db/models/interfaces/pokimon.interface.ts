import { Document } from "mongoose";

export interface IPokemon extends Document {
  name: string;
  img_src?: string;
  types?: Number[];
  abilities?: Number[];
  created_at: Date;
  updated_at: Date;
  is_deleted?: Boolean | null;
}
