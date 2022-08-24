import { Db } from "./Api.mjs";

export default {
  addCard(query) {
    return Db().post("collection/card", query);
  },
  getAllCollections(query) {
    const { userId } = query;
    return Db().get(`collection/${userId}`);
  },
};
