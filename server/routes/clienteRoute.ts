import express from "express";
import clienteController from "../controllers/clienteController";

const router = express.Router();

router.post("/cliente", clienteController.register);

router
  .route("/cliente/:id")
  .get(clienteController.getClienteById)
  .patch(clienteController.updateCliente)
  .delete(clienteController.deleteCliente);

export default router;
