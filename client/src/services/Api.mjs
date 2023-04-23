import axios from "axios";

export const Db = (token) => {
  if (token) {
    return axios.create({
      baseURL: "http://localhost:8081/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return axios.create({
      baseURL: "http://localhost:8081/",
    });
  }
};
export const Scryfall = () => {
  return axios.create({
    baseURL: "http://api.scryfall.com/",
  });
};
