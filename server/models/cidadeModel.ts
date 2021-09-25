import mongoose from "mongoose";

const cidadeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome da cidade obrigatório."],
      lowercase: true,
    },
    estado: {
      type: String,
      required: [true, "Estado obrigatório."],
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cidade", cidadeSchema);
