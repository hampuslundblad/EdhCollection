require("dotenv").config();

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "edhcollection",
    user: process.env.DB_USER || "edhcollection",
    password: process.env.DB_PASSWORD || "edhcollection",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./edhcollection.sqlite",
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
