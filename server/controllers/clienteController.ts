import { Request, Response } from "express";
import Clientes from "../models/clienteModel";
import { IReqAuth } from "../config/interface";

const clienteController = {
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
  getClienteById: async (req: Request, res: Response) => {
    try {
      const cliente = await Clientes.findById(req.params.id);

      res.json(cliente);
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateCliente: async (req: IReqAuth, res: Response) => {
    try {
      const { name } = req.body;

      await Clientes.findByIdAndUpdate({ _id: req.params.id }, { name });

      res.json({ msg: "Alteração feita com sucesso." });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteCliente: async (req: IReqAuth, res: Response) => {
    try {
      await Clientes.findByIdAndDelete({ _id: req.params.id });

      res.json({ msg: "Cliente deletado com sucesso." });
    } catch (error: any) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default clienteController;
