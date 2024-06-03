import { Router } from "express";
import { TypeController } from "../controllers/typeController";

const router = Router();

router.get("/", TypeController.getAll);

router.put("/create", TypeController.create);

router.get("/:id", TypeController.getById);

router.patch("/:id", TypeController.update);

router.delete("/:id", TypeController.delete);

export default router;
