import { Request, Response } from "express";
import Clientes from "../models/clienteModel";

const clienteController = {
  //@desc   Register client
  //@route  POST /api/client
  //@access Public
  register: async (req: Request, res: Response) => {
    try {
      const { name, sexo, data_nascimento, idade, cidade } = req.body;

      const newCliente = new Clientes({
        name,
        sexo,
        data_nascimento,
        idade,
        cidade,
      });

      await newCliente.save();

      return res.json({
        status: "Cliente criado com sucesso.",
        newCliente,
      });
    } catch (error: any) {
      return res.status(500).json({ msg: error });
    }
  },
  //@desc   Get Client By Id or Name
  //@route  GET /api/client/:param
  //@access Public
  getClienteById: async (req: Request, res: Response) => {
    try {
      const cliente = await Clientes.findById(req.params.param);

      res.json(cliente);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
  //@desc   Get Client By Id or Name
  //@route  GET /api/client/name/:param
  //@access Public
  getClienteByName: async (req: Request, res: Response) => {
    try {
      const cliente = await Clientes.find({
        name: { $regex: ".*" + req.params.param + ".*" },
      });

      res.json(cliente);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
  //@desc   Update cliente
  //@route  PATCH /api/client/:param
  //@access Public
  updateCliente: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      await Clientes.findByIdAndUpdate({ _id: req.params.param }, { name });

      res.json({ msg: "Alteração feita com sucesso." });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
  //@desc   Delete cliente
  //@route  DELETE /api/client/:param
  //@access Public
  deleteCliente: async (req: Request, res: Response) => {
    try {
      await Clientes.findByIdAndDelete({ _id: req.params.param });

      res.json({ msg: "Cliente deletado com sucesso." });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default clienteController;
