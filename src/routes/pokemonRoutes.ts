import { Router } from "express";
import { PokemonController } from "../controllers/pokemonController";

const router = Router();

router.get("/", PokemonController.getAll);

router.put("/create", PokemonController.create);

router.get("/:id", PokemonController.getById);

router.patch("/:id", PokemonController.update);

router.delete("/:id", PokemonController.delete);

export default router;
