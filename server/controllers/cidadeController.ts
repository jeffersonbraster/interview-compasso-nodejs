import { Request, Response } from "express";
import Cidades from "../models/cidadeModel";

const cidadeController = {
  //@desc   Create cidade
  //@route  POST /api/cidade
  //@access Public
  create: async (req: Request, res: Response) => {
    try {
      const { name, estado } = req.body;

      const newCidade = new Cidades({
        name,
        estado,
      });

      await newCidade.save();

      return res.json({
        status: "Cidade criado com sucesso.",
        newCidade,
      });
    } catch (error: any) {
      return res.status(500).json({ msg: error });
    }
  },
};

export default cidadeController;
