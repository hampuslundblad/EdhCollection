const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const CollectionController = require("./controllers/CollectionController");
module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.post("/collection", CollectionController.createCollection);
  app.post("/collection/card", CollectionController.addCardToCollection);
  app.get("/collection/:userId", CollectionController.findAll);
};
