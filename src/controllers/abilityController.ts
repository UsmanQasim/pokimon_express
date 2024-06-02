import { NextFunction, Request, Response } from "express";
import { Delete, Get, Put, Route, Tags, Patch } from "tsoa";
import {
  createAbility,
  deleteAbility,
  getAbilityById,
  getAllAbilities,
  updateAbility,
} from "../services/ability.service";

@Route("ability")
@Tags("Ability")
export class AbilityController {
  @Put("/")
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const createdAbility = await createAbility(req.body);
      if (createdAbility) {
        res.status(201).json({
          message: "Ability Created",
          success: true,
          data: createdAbility,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to Create Ability", success: false });
      }
    } catch (error) {
      next(error);
    }
  }

  @Get("/")
  public static async getAll(res: Response): Promise<void> {
    try {
      const abilities = await getAllAbilities();
      res.status(200).json({
        message: "All Abilities retrieved",
        success: true,
        data: abilities,
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
      const ability = await getAbilityById(req.params.id);
      if (ability) {
        res
          .status(200)
          .json({ message: "Ability retrieved", success: true, data: ability });
      } else {
        res.status(404).json({ message: "Ability not found", success: false });
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
      const updatedAbility = await updateAbility(req.params.id, req.body);
      if (updatedAbility) {
        res.status(200).json({
          message: "Ability updated",
          success: true,
          data: updatedAbility,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to update Ability", success: false });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update Ability", error: error });
    }
  }

  @Delete("/{id}")
  public static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const deleted = await deleteAbility(req.params.id);
      if (deleted) {
        res.status(200).json({ message: "Ability deleted", success: true });
      } else {
        res
          .status(400)
          .json({ message: "Failed to delete Ability", success: false });
      }
    } catch (error) {
      next(error);
    }
  }
}
