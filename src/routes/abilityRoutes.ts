import { Router } from "express";
import { AbilityController } from "../controllers/abilityController";

const router = Router();

router.get("/", AbilityController.getAll);

router.put("/create", AbilityController.create);

router.get("/:id", AbilityController.getById);

router.patch("/:id", AbilityController.update);

router.delete("/:id", AbilityController.delete);

export default router;
