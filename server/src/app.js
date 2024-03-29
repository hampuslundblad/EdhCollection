const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database");
const config = require("./config/config");

const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

require("./passport");
require("./routes")(app);

sequelize
  .sync()
  .then(() => {
    app.listen(config.port);
    console.log(`Server started, ${config.port}`);
  })
  .catch((err) => {
    console.log(err);
  });
