import dotenv from "dotenv";
dotenv.config();
import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import routes from "./routes/index";

//middleware
const app = express();
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api", routes.clienteRoute);
app.use("/api", routes.cidadeRoute);

//database
import "./config/database";

//server listenning
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Servidor ligado na porta", PORT);
});
