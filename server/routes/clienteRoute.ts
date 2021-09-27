import express from "express";
import clienteController from "../controllers/clienteController";
import { validRegisterClient, validUpdateClient } from "../middlewares/valid";

const router = express.Router();

router.post("/cliente", validRegisterClient, clienteController.register);

router
  .route("/cliente/:param")
  .get(clienteController.getClienteByIdAndName)
  .patch(validUpdateClient, clienteController.updateCliente)
  .delete(clienteController.deleteCliente);

export default router;
