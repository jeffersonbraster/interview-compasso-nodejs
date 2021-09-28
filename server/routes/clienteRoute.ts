import express from "express";
import clienteController from "../controllers/clienteController";
import { validRegisterClient, validUpdateClient } from "../middlewares/valid";

const router = express.Router();

router.post("/cliente", validRegisterClient, clienteController.register);

router.get("/cliente/name/:param", clienteController.getClienteByName);

router
  .route("/cliente/:param")
  .get(clienteController.getClienteById)
  .patch(validUpdateClient, clienteController.updateCliente)
  .delete(clienteController.deleteCliente);

export default router;
