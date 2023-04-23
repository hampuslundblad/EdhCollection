import { Db } from "./Api.mjs";
type AddCardRequest = {
  collectionName: string;
  userId: string;
  card: {
    name: string;
    price: string;
    set: string;
    quantity: string;
    foil: string;
    imageUrl: string;
  };
};

export default {
  addCard(query: AddCardRequest, token) {
    return Db(token).post("collection/card", query);
  },
  async getAllCollections(query, token) {
    const { userId } = query;
    const response = await Db(token).get(`collection/${userId}`);
    return response;
  },
};
