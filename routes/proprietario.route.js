import express from "express";
import AnimalController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", AnimalController.createProprietario);
router.get("/", AnimalController.getProprietarios);
router.get("/:id", AnimalController.getProprietario);
router.delete("/:id", AnimalController.deleteProprietario);
router.put("/", AnimalController.updateProprietario);

export default router;