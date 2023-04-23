import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { Sequelize, DataTypes } from "sequelize";

export function loadModels(db) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  fs.readdirSync(__dirname + "/models")
    .filter((file) => file !== "index.js")
    .forEach((file) => {
      const model = require(path.join(__dirname + "/models", file))(
        db.sequelize,
        Sequelize.DataTypes
      );
      db[model.name] = model;
    });
}
