const { User, Collection, Card } = require("../database");
module.exports = {
  async addCardToCollection(userId, collectionId) {
    const collection = await findCollectionByName(userId, collectionId);
    const card = await findCardInCollection(cardName, isFoil, collection.id);
    if (card) {
      await this.updateCardPriceAndQuantity(req, card);
    } else {
      const _ = await this.createCard(req, collection.id);
    }
  },
  async findCollectionByName(
    userId = isRequired("userId"),
    collectionName = isRequired(collectionName)
  ) {
    const collection = await Collection.findOne({
      where: {
        userId: userId,
        name: collectionName,
      },
      include: {
        model: Card,
      },
    });
    if (!collection) {
      throw "***Collection is undefined or null***";
    } else {
      return collection;
    }
  },

  async findCardInCollection(
    cardName = isRequired("cardName"),
    isFoil = isRequired("isFoil"),
    collectionId = isRequired("collectionId")
  ) {
    const card = await Card.findOne({
      where: {
        name: cardName,
        CollectionId: collectionId,
        foil: isFoil,
      },
    });
    return card;
  },
  async createCard(req, collectionId) {
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
  },
  async updateCardPriceAndQuantity(quantity, card) {
    card = await this.findCardInCollection(
      card.name,
      card.isFoil,
      card.collectionId
    );
    const oldQuantity = parseInt(quantity);
    const newQuantity = card.quantity + oldQuantity;
    const priceEach = card.price / card.quantity;
    const newPrice = newQuantity * priceEach;
    card.price = newPrice;
    card.quantity = newQuantity;
    await card.save();
  },
};
function isRequired(argumentName) {
  throw new Error(`${argumentName} is a required argument.`);
}
