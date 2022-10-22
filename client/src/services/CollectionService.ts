import { Db } from "./Api.mjs";

export default {
  addCard(query) {
    return Db().post("collection/card", query);
  },
  async getAllCollections(query) {
    const { userId } = query;
    const response = await Db().get(`collection/${userId}`);
    return response;
  },
};
