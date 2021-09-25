import express from "express";
import clienteController from "../controllers/clienteController";

const router = express.Router();

router.post("/cliente", clienteController.register);

router.get("/cliente/name/:name", clienteController.getClienteByName);
router
  .route("/cliente/id/:id")
  .get(clienteController.getClienteById)
  .patch(clienteController.updateCliente)
  .delete(clienteController.deleteCliente);

export default router;
