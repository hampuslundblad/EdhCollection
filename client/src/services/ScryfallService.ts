import { Scryfall } from "./Api.mjs";
import { ScryfallGetCardRequest } from "./Requests/ScryfallGetCardRequest";
import { ScryfallGetCardResponse } from "./Responses/ScryfallGetCardResponse";

export default {
  async searchCard(query: ScryfallGetCardRequest) {
    const response = await Scryfall().get(`/cards/search?q=${query}`);
    const responseData = response.data.data[0];
    const data: ScryfallGetCardResponse = {
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
