import CardMarketApi from "@/services/CardMarketApi";

export default {
  searchCard(query) {
    return CardMarketApi().post("cardSearch", query);
  }
};
