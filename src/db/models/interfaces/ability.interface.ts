import { Document } from "mongoose";

export interface IAbility extends Document {
  name: string;
  img_src?: string;
  created_at: Date;
  updated_at: Date;
  is_deleted?: Boolean | null;
}
