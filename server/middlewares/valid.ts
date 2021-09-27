import { Request, Response, NextFunction } from "express";

export const validRegisterClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, sexo, data_nascimento, idade, cidade } = req.body;

  const errors = [];

  if (!name) {
    errors.push("Nome não pode ser vazio.");
  } else if (name.length < 5) {
    errors.push("Nome não pode ter menos 5 caracteres.");
  } else if (name.length > 50) {
    errors.push("Nome não pode ser maior que 50 caracteres.");
  }

  if (!sexo) {
    errors.push("Sexo não pode ser vazio.");
  } else if (sexo !== "masculino" && "feminino" && "outros") {
    errors.push("Insire um sexo valido: masculino, feminino ou outros.");
  }

  if (!data_nascimento) {
    errors.push("Data de nascimento não pode ser vazio.");
  }

  if (!idade) {
    errors.push("Idade não pode ser vazio.");
  }

  if (!cidade) {
    errors.push("Cidade não pode ser vazio.");
  } else if (name.length > 50) {
    errors.push("Cidade não pode ser maior que 50 caracteres.");
  }

  if (errors.length > 0) return res.status(400).json({ msg: errors });

  next();
};

export const validUpdateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  const errors = [];

  if (!name) {
    errors.push("Nome não pode ser vazio.");
  } else if (name.length < 5) {
    errors.push("Nome não pode ter menos 5 caracteres.");
  } else if (name.length > 50) {
    errors.push("Nome não pode ser maior que 50 caracteres.");
  }

  if (errors.length > 0) return res.status(400).json({ msg: errors });

  next();
};

export const validRegisterCidade = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, estado } = req.body;

  const errors = [];

  if (!name) {
    errors.push("Nome não pode ser vazio.");
  } else if (name.length > 50) {
    errors.push("Nome não pode ser maior que 50 caracteres.");
  }

  if (!estado) {
    errors.push("Estado não pode ser vazio.");
  } else if (name.length > 50) {
    errors.push("Estado não pode ser maior que 50 caracteres.");
  }

  if (errors.length > 0) return res.status(400).json({ msg: errors });

  next();
};
