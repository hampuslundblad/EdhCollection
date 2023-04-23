import fs from "fs";
import path from "path";

import Sequelize from "sequelize";
import config from "../config/config.js";
import { applyAssociations } from "./applyAssociations.js";
export const sequelize = {};

const db = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);
db.sequelize = db;
db.Sequelize = Sequelize;

//loadModels(db);
//applyAssociations(db.sequelize);
