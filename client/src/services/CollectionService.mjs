import Api from "@/services/Api";

export default {
  addCard(credentials) {
    return Api().post("collection/card", credentials);
  },
  getAllCollections(query) {
    const { userId } = query;
    return Api().get(`collection?userId=${userId}`);
  },
};
