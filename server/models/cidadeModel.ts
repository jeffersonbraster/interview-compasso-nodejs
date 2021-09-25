import mongoose from "mongoose";

const cidadeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome da cidade obrigatório."],
    },
    estado: {
      type: String,
      required: [true, "Estado obrigatório."],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cidade", cidadeSchema);
