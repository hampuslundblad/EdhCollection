const fs = require("fs");
const path = require("path");

const Sequelize = require("sequelize");
const config = require("../config/config");
const {applyAssociations} = require('./applyAssociations')
const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options,
);

fs
.readdirSync(__dirname + '/models')
.filter((file) => file !== 'index.js')
.forEach((file) => {
    const model = require(path.join(__dirname + '/models',file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize

applyAssociations(db.sequelize)

module.exports = db;
