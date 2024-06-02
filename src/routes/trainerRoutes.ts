import { Router } from "express";
import { TrainerController } from "../controllers/trainerController";

const router = Router();

router.get("/", TrainerController.getAll);

router.put("/create", TrainerController.create);

router.get("/:id", TrainerController.getById);

router.patch("/:id", TrainerController.update);

router.delete("/:id", TrainerController.delete);

export default router;
