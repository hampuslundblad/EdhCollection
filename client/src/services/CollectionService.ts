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
  addCard(query: AddCardRequest) {
    console.log(query);
    return Db().post("collection/card", query);
  },
  async getAllCollections(query) {
    const { userId } = query;
    const response = await Db().get(`collection/${userId}`);
    return response;
  },
};
