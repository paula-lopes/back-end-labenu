import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { router } from "./routes/router";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
