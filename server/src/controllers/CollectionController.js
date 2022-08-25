const { User, Collection, Card } = require("../database");

module.exports = {
  async addCardToCollection(req, res) {
    try {
      const userId = req.body.userId;
      console.log("userID", userId);

      const collectionName = req.body.collectionName;
      const collection = await Collection.findOne({
        where: {
          name: collectionName,
          UserId: userId,
        },
      });
      const card = await Card.create({
        CollectionId: collection.id,
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
