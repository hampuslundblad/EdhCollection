import axios from "axios";
const baseUrl = "https://api.scryfall.com";
const searchCardUrl = "/cards/search";
const searchQuery = "?q=";

export default async function searchCard(cardName) {
  let result = await axios.get(
    baseUrl + searchCardUrl + searchQuery + cardName
  );
  const image_uri_small = result.data.data[0].image_uris.small;
  const card_name = result.data.data[0].name;
  const price = result.data.data[0].prices.eur;
  return { card_name: card_name, image_uri: image_uri_small, price: price };
}

