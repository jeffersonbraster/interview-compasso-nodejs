import dotenv from "dotenv";
dotenv.config();
import express from "express";

//middleware
const app = express();
app.use(express.json());

//database
import "./config/database";

//server listenning
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Servidor ligado na porta", PORT);
});
