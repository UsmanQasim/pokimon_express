import mongoose, { Schema } from "mongoose";
import { IPokemon } from "./interfaces/pokimon.interface";

const pokimonSchema = new Schema<IPokemon>({
  name: {
    type: String,
    required: true,
  },
  img_src: {
    type: String,
  },
  types: {
    type: [Number],
  },
  abilities: {
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
    default: false,
  },
});

const PokemonModal = mongoose.model<IPokemon>("Pokimon", pokimonSchema);

export default PokemonModal;
