const { User, Collection, Card } = require("../database");

module.exports = {
  async createCollection(req, res) {
    try {
      const userId = req.body.userId;
      const user = await User.findByPk(userId);
      if (user === null) {
        return res.status(500).send({
          error: "Unable to find user",
        });
      }
      const userCollections = await Collection.findAll({
        where: {
          userId: userId,
        },
        include: {
          model: Card,
        },
      });
      if (userCollections.length >= 2) {
        return res.status(500).send({
          error: "This user already has 2 collections",
        });
      }
      const collection = await Collection.create({
        UserId: userId,
        name: "wanted",
      });

      return res.send({ message: "Collection created" });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        error: "An error has occured while trying to create a collection",
      });
    }
  },

  async addCardToCollection(req, res) {
    try {
      const userId = req.body.userId;
      console.log("userID", userId);
      const collectionId = req.body.collectionId;
      const collection = Collection.findAll({
        where: {
          id: collectionId,
          UserId: userId,
        },
      });
      const card = await Card.create({
        CollectionId: collectionId,
        name: req.body.card.name,
        price: req.body.card.price,
        set: req.body.card.set,
        quantity: req.body.card.quantity,
        foil: req.body.card.foil,
        imageUrl: req.body.card.imageUrl,
      });
      return res.send({ message: "Successfully added card to the collection" });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error:
          "An error has occured while trying to add a card to the collection.",
      });
    }
  },
  async findAll(req, res) {
    try {
      const userId = req.params.userId;
      const userCollections = await Collection.findAll({
        where: {
          userId: userId,
        },
        include: {
          model: Card,
        },
      });
      const userCollectionsJson = JSON.stringify(userCollections);
      res.send({
        userCollections: userCollectionsJson,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error occured while fetching your collections",
      });
    }
  },
};
