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
        msg: "Cidade criado com sucesso.",
        newCidade,
      });
    } catch (error: any) {
      return res.status(500).json({ msg: error });
    }
  },
  //@desc   Get Cidades By name or estado
  //@route  GET /api/cidade/:param
  //@access Public
  getCidadeByNameAndEstado: async (req: Request, res: Response) => {
    try {
      const cliente = await Cidades.find({
        $or: [
          { name: { $regex: ".*" + req.params.param + ".*" } },
          { estado: { $regex: ".*" + req.params.param + ".*" } },
        ],
      });

      res.json(cliente);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default cidadeController;
