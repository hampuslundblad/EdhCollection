const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const CollectionController = require("./controllers/CollectionController");
const isAuthenticated = require("./policies/isAuthenticated");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.post(
    "/collection/card",
    isAuthenticated,
    CollectionController.addCardToCollection
  );
  app.get("/collection/:userId", isAuthenticated, CollectionController.findAll);
};
