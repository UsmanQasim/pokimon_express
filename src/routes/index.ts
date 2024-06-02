import express from "express";
import pokemonRouter from "./pokemonRoutes";
import trainerRouter from "./trainerRoutes";

const mainRouter = express.Router();

mainRouter.use("/pokemons", pokemonRouter);
mainRouter.use("/trainer", trainerRouter);
export default mainRouter;
