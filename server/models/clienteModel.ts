import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome completo obrigatório"],
      maxlength: [50, "Seu nome ultrapassou o limite de 50 caracteres."],
      minlength: [5, "Seu nome não pode ser menor que 5 caracteres."],
    },
    sexo: {
      type: String,
      required: [true, "Sexo obrigatório."],
    },
    data_nascimento: {
      type: String,
      required: [true, "Data de nascimento obrigatório."],
    },
    idade: {
      type: Number,
      required: [true, "Idade obrigatório."],
    },
    cidade: {
      type: String,
      required: [true, "Cidade obrigatório."],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cliente", clienteSchema);
