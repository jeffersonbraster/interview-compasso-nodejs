import express from "express";
import cidadeController from "../controllers/cidadeController";

const router = express.Router();

router.post("/cidade", cidadeController.create);

export default router;
