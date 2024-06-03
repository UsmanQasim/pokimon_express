import { NextFunction, Request, Response } from "express";
import { Delete, Get, Put, Route, Tags, Patch } from "tsoa";
import {
  createType,
  deleteType,
  getAllTypes,
  getTypeById,
  updateType,
} from "../services/type.service";

@Route("type")
@Tags("Type")
export class TypeController {
  @Put("/")
  public static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const createdType = await createType(req.body);
      if (createdType) {
        res.status(201).json({
          message: "Type Created",
          success: true,
          data: createdType,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to Create Type", success: false });
      }
    } catch (error) {
      next(error);
    }
  }

  @Get("/")
  public static async getAll(res: Response): Promise<void> {
    try {
      const types = await getAllTypes();
      res.status(200).json({
        message: "All Types retrieved",
        success: true,
        data: types,
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
      const type = await getTypeById(req.params.id);
      if (type) {
        res
          .status(200)
          .json({ message: "Type retrieved", success: true, data: type });
      } else {
        res.status(404).json({ message: "Type not found", success: false });
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
      const updatedType = await updateType(req.params.id, req.body);
      if (updatedType) {
        res.status(200).json({
          message: "Type updated",
          success: true,
          data: updatedType,
        });
      } else {
        res
          .status(400)
          .json({ message: "Failed to update Type", success: false });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to update Type", error: error });
    }
  }

  @Delete("/{id}")
  public static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const deleted = await deleteType(req.params.id);
      if (deleted) {
        res.status(200).json({ message: "Type deleted", success: true });
      } else {
        res
          .status(400)
          .json({ message: "Failed to delete Type", success: false });
      }
    } catch (error) {
      next(error);
    }
  }
}
