import CollectionService from "../services/CollectionService.ts";
import ScryfallService from "../services/ScryfallService.ts";

export const addCardToDatatbase = async (cardInfo, isFoil, userId, token) => {
  let price;
  if (isFoil === "Yes") {
    price = cardInfo.priceEurFoil;
  } else {
    price = cardInfo.priceEur;
  }
  try {
    const response = await CollectionService.addCard(
      {
        collectionName: cardInfo.collectionName,
        userId: userId,
        card: {
          name: cardInfo.name,
          price: price,
          set: cardInfo.set,
          quantity: cardInfo.quantity,
          foil: cardInfo.foil,
          imageUrl: cardInfo.imageUri,
        },
      },
      token
    );
  } catch (error) {
    return undefined;
  }
};
export const getCardInformationScryfall = async (cardName) => {
  try {
    const { priceEurFoil, priceEur, name, set, imageUri, status } =
      await ScryfallService.searchCard(cardName);
    return {
      priceEurFoil: priceEurFoil,
      priceEur: priceEur,
      name: name,
      set: set,
      imageUri: imageUri,
    };
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
