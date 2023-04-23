import { Scryfall } from "./Api.mjs";
export type ScryfallGetCardRequest = {
  name: string;
  priceEur: string;
  priceEurFoil: string;
  foil: boolean;
  imageUri: string;
  set: string;
};
const NOT_FOUND_STATUS = 404;
export default {
  async searchCard(query: ScryfallGetCardRequest) {
    const response = await Scryfall().get(`/cards/search?q=${query}`);

    if (response.data.status == NOT_FOUND_STATUS) {
      return { status: NOT_FOUND_STATUS };
    }
    const responseData = response.data.data[0];

    const data = {
      name: responseData.name,
      priceEur: responseData.prices.eur,
      priceEurFoil: responseData.prices.eur_foil,
      foil: !responseData.nonfoil,
      imageUri: responseData.image_uris.normal,
      set: responseData.set,
    };
    setTimeout(function () {}, 1000);
    return data;
  },
};
