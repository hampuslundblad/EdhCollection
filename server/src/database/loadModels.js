const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

function loadModels(db) {
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
module.exports = { loadModels };
