const fs = require("fs");
const path = require("path");

const Sequelize = require("sequelize");
const config = require("../config/config");
const {applyAssociations} = require('./applyAssociations')
const {loadModels} = require('./loadModels')
const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options,
);
db.sequelize = sequelize
db.Sequelize = Sequelize

loadModels(db)
applyAssociations(db.sequelize)

module.exports = db;
