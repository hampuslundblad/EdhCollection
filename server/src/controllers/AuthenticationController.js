const { User, Collection } = require("../database");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    console.log(req.body);
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (user) {
      res.status(400).send({
        error: "User already exists",
        user,
      });
      return;
    }
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      createCollectionsForUser(user.id);
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(userJson),
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "Something went wrong, please try again later.",
      });
    }
  },

  async login(req, res) {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: "The login information was incorrect",
        });
      }
      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: "The login information was incorrect",
        });
      }

      const userJson = user.toJSON();
      return res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occured trying to login",
      });
    }
  },
};
async function createCollectionsForUser(userId) {
  await Collection.create({
    UserId: userId,
    name: "wanted",
  });
  await Collection.create({
    UserId: userId,
    name: "have",
  });
}
