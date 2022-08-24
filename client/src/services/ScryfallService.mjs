import { Scryfall } from "@/services/Api";

export default {
  searchCard(query) {
    return Scryfall().get(`/cards/search?q=${query}`);
  },
};
