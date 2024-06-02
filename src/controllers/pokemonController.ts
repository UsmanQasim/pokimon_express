import { NextFunction, Request, Response } from "express";
import { Delete, Get, Put, Post, Route, Tags, Patch } from "tsoa";
import {
  createPokemon,
  deletePokemon,
  getAllPokemon,
  getPokemonById,
  updatePokemon,
} from "../services/pokemon.service";

@Route("pokemon")
@Tags("Pokemon")
export class PokemonController {
  @Put("/")
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const createdPokemon = await createPokemon(req.body);
      if (createdPokemon) {
        res.status(201).json({
          message: "Pokemon Created",
          success: true,
          data: createdPokemon,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to Create Pokemon", success: false });
      }
    } catch (error) {
      next(error);
    }
  }

  @Get("/")
  public static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const pokemons = await getAllPokemon();
      res.status(200).json({
        message: "All Pokemons retrieved",
        success: true,
        data: pokemons,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  @Get("/{id}")
  public static async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const pokemon = await getPokemonById(req.params.id);
      if (pokemon) {
        res
          .status(200)
          .json({ message: "Pokemon retrieved", success: true, data: pokemon });
      } else {
        res.status(404).json({ message: "Pokemon not found", success: false });
      }
    } catch (error) {
      next(error);
    }
  }

  @Patch("/{id}")
  public static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const updatedPokemon = await updatePokemon(req.params.id, req.body);
      if (updatedPokemon) {
        res.status(200).json({
          message: "Pokemon updated",
          success: true,
          data: updatedPokemon,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to update Pokemon", success: false });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update Pokemon", error: error });
    }
  }

  @Delete("/{id}")
  public static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const deleted = await deletePokemon(req.params.id);
      if (deleted) {
        res.status(200).json({ message: "Pokemon deleted", success: true });
      } else {
        res
          .status(400)
          .json({ message: "Failed to delete Pokemon", success: false });
      }
    } catch (error) {
      next(error);
    }
  }
}
