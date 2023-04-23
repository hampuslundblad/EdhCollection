import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import db from "./database/index";
// @ts-ignore
import config from "./config/config.js";
// @ts-ignore
import { AuthenticationController } from "./controllers/index.js";
// @ts-ignore
import { CollectionController } from "./controllers/index.js";
// @ts-ignore
import { AuthenticationControllerPolicy } from "./policies/index.js";

const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.post(
  "/register",
  AuthenticationControllerPolicy.register,
  AuthenticationController.register
);
app.post("/login", AuthenticationController.login);
app.post("/collection/card", CollectionController.addCardToCollection);
app.get("/collection/:userId", CollectionController.findAll);

db.sequelize
  .sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started, ${config.port}`);
  })
  .catch((err: any) => {
    console.log(err);
  });
