import { Scryfall } from "./Api.mjs";
import { ScryfallGetCardRequest } from "./models/Requests/ScryfallGetCardRequest";
import { ScryfallGetCardResponse } from "./models/Responses/ScryfallGetCardResponse";

const NOT_FOUND_STATUS = 404;
export default {
  async searchCard(query: ScryfallGetCardRequest) {
    const response = await Scryfall().get(`/cards/search?q=${query}`);

    if (response.data.status == 404) {
      return { status: 404 };
    }
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
