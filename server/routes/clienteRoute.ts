import express from "express";
import clienteController from "../controllers/clienteController";

const router = express.Router();

router.post("/cliente", clienteController.register);

router
  .route("/cliente/:param")
  .get(clienteController.getClienteByIdAndName)
  .patch(clienteController.updateCliente)
  .delete(clienteController.deleteCliente);

export default router;
