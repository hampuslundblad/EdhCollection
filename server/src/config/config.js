const path = require("path");

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "edhcollection",
    user: process.env.DB_USER || "edhcollection",
    password: process.env.DB_PASS || "edhcollection",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.resolve(__dirname, "../../edhcollection.sqlite"),
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
