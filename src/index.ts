import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { apisInfoLogger } from "./utils/loggers";
import contactRest from "./rest/contactRest";
import errorMiddleware from "./utils/errorMiddleware";

const server = express();
server.use(cors()); // enables cors for all routes

server.use(express.json()); // for parsing application/json
server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

server.use(apisInfoLogger);

server.get("/hello", (req, res) => {
  res.send("Hello!😁");
});

server.use(contactRest);

server.use(errorMiddleware);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("\n\n🚀 Server running at http://localhost:" + PORT);
});
