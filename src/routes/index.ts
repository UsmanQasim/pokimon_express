import express from "express";
import pokemonRouter from "./pokemonRoutes";
import trainerRouter from "./trainerRoutes";
import abilityRouter from "./abilityRoutes";

const mainRouter = express.Router();

mainRouter.use("/pokemons", pokemonRouter);
mainRouter.use("/trainer", trainerRouter);
mainRouter.use("/ability", abilityRouter);
export default mainRouter;
