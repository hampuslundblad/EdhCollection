const {
  findCardInCollection,
  findCollectionByName,
  createCard,
  addCardToCollection,
} = require("../repositories/CollectionRepository.js");
module.exports = {
  async addCardToCollection(req, res) {
    const cardName = req.body.card.name;
    const isFoil = req.body.card.foil;
    try {
      const userId = getUserId(req);
      addCardToCollection(userId, req.body.collectionName);
      s;
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

const isCardInCollection = async (cardName, collectionId) => {
  const isCardInCollection = await findCardInCollection(cardName, collectionId);
  if (isCardInCollection) {
    return true;
  }
  return false;
};

const getUserId = (req) => {
  if (req.body.userId) {
    return req.body.userId;
  }
  return req.params.userId;
};
