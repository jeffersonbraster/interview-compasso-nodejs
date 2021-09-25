import express from "express";
import clienteController from "../controllers/clienteController";

const router = express.Router();

router.post("/cliente", clienteController.register);

export default router;
