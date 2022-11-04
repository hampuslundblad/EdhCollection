const { User, Collection, Card } = require("../database");

module.exports = {
  async addCardToCollection(req, res) {
    try {
      const collection = findOneCollection(req);
      const card = createCard(req);
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
      const userCollections = findAllCollections(req);
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
const createCard = async (req) => {
  const card = await Card.create({
    CollectionId: collection.id,
    name: req.body.card.name,
    price: req.body.card.price,
    set: req.body.card.set,
    quantity: req.body.card.quantity,
    foil: req.body.card.foil,
    imageUrl: req.body.card.imageUrl,
  });
  return card;
};
const findOneCollection = async (req) => {
  const userId = req.body.userId;
  const collectionName = req.body.collectionName;
  const collection = await Collection.findOne({
    where: {
      name: collectionName,
      UserId: userId,
    },
  });
  return collection;
};
const findAllCollections = async (req) => {
  const userId = req.params.userId;
  const userCollections = await Collection.findAll({
    where: {
      userId: userId,
    },
    include: {
      model: Card,
    },
  });
  return userCollections;
};
