import { NextFunction, Request, Response } from "express";
import { Delete, Get, Put, Post, Route, Tags, Patch } from "tsoa";
import {
  createTrainer,
  deleteTrainer,
  getAllTrainers,
  getTrainerById,
  updateTrainer,
} from "../services/trainer.service";

@Route("trainer")
@Tags("Trainer")
export class TrainerController {
  @Put("/")
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const createdTrainer = await createTrainer(req.body);
      if (createdTrainer) {
        res.status(201).json({
          message: "Trainer Created",
          success: true,
          data: createdTrainer,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to Create Trainer", success: false });
      }
    } catch (error) {
      next(error);
    }
  }

  @Get("/")
  public static async getAll(res: Response): Promise<void> {
    try {
      const trainers = await getAllTrainers();
      res.status(200).json({
        message: "All Trainers retrieved",
        success: true,
        data: trainers,
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
      const trainer = await getTrainerById(req.params.id);
      if (trainer) {
        res
          .status(200)
          .json({ message: "Trainer retrieved", success: true, data: trainer });
      } else {
        res.status(404).json({ message: "Trainer not found", success: false });
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
      const updatedTrainer = await updateTrainer(req.params.id, req.body);
      if (updatedTrainer) {
        res.status(200).json({
          message: "Trainer updated",
          success: true,
          data: updatedTrainer,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to update Trainer", success: false });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update Trainer", error: error });
    }
  }

  @Delete("/{id}")
  public static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const deleted = await deleteTrainer(req.params.id);
      if (deleted) {
        res.status(200).json({ message: "Trainer deleted", success: true });
      } else {
        res
          .status(400)
          .json({ message: "Failed to delete Trainer", success: false });
      }
    } catch (error) {
      next(error);
    }
  }
}
