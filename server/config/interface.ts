import { Document } from "mongoose";
import { Request } from "express";

export interface ICliente extends Document {
  name: string;
  sexo: string;
  data_nascimento: string;
  idade: number;
  cidade: string;
}

export interface IReqAuth extends Request {
  cliente?: ICliente;
}
