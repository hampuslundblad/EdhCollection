const { User, Collection, Card } = require("../database");
const card = require("../database/models/card");

module.exports = {
  async addCardToCollection(req, res) {
    const cardName = req.body.card.name;
    const isFoil = req.body.card.foil;
    try {
      const userId = getUserId(req);
      const collection = await findCollectionByName(
        userId,
        req.body.collectionName
      );
      if (!collection) {
        throw "***Collection is undefined or null***";
      }
      const card = await findCardInCollection(cardName, isFoil, collection.id);
      if (card) {
        await updateCardPriceAndQuantity(req, card);
      } else {
        const _ = await createCard(req, collection.id);
      }
      return res.send({
        message: "Successfully added card to the collection",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error:
          "An error has occured while trying to add a card to the collection.",
      });
    }
  },
  async findAll(req, res) {
    const userId = getUserId(req);
    try {
      const haveCollection = await findCollectionByName(userId, "have");
      const wantedCollection = await findCollectionByName(userId, "wanted");

      const wantedCollectionJson = JSON.stringify(wantedCollection);
      const haveCollectionJson = JSON.stringify(haveCollection);
      res.send({
        wantedCollection: wantedCollectionJson,
        haveCollection: haveCollectionJson,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error occured while fetching your collections",
      });
    }
  },
};

/*** Helpers  ****/
const findCardInCollection = async (cardName, isFoil, collectionId) => {
  const card = await Card.findOne({
    where: {
      name: cardName,
      CollectionId: collectionId,
      foil: isFoil,
    },
  });
  return card;
};

const createCard = async (req, collectionId) => {
  const quantity = req.body.card.quantity;
  const card = await Card.create({
    CollectionId: collectionId,
    name: req.body.card.name,
    price: req.body.card.price * quantity,
    set: req.body.card.set,
    quantity: quantity,
    foil: req.body.card.foil,
    imageUrl: req.body.card.imageUrl,
  });
  return card;
};

const isCardInCollection = async (cardName, collectionId) => {
  const isCardInCollection = await findCardInCollection(cardName, collectionId);
  if (isCardInCollection) {
    return true;
  }
  return false;
};

const findCollectionByName = async (userId, collectionName) => {
  const collection = await Collection.findOne({
    where: {
      userId: userId,
      name: collectionName,
    },
    include: {
      model: Card,
    },
  });

  return collection;
};

const updateCardPriceAndQuantity = async (req, card) => {
  const oldQuantity = parseInt(req.body.card.quantity);
  const newQuantity = card.quantity + oldQuantity;
  const priceEach = card.price / card.quantity;
  const newPrice = newQuantity * priceEach;
  card.price = newPrice;
  card.quantity = newQuantity;
  await card.save();
};

const getUserId = (req) => {
  if (req.body.userId) {
    return req.body.userId;
  }
  return req.params.userId;
};
