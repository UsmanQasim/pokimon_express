import express from "express";
import pokemonRouter from "./pokemonRoutes";

const mainRouter = express.Router();

mainRouter.use("/pokemons", pokemonRouter);
export default mainRouter;
