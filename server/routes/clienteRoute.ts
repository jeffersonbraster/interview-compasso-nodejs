import express from "express";
import clienteController from "../controllers/clienteController";

const router = express.Router();

router.post("/cliente", clienteController.register);

router.get("/cliente/:id", clienteController.getClienteById);

export default router;
