import express from "express";
import cidadeController from "../controllers/cidadeController";
import { validRegisterCidade } from "../middlewares/valid";

const router = express.Router();

router.post("/cidade", validRegisterCidade, cidadeController.create);

router.get("/cidade/:param", cidadeController.getCidadeByNameAndEstado);

export default router;
