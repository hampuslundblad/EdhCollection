import axios from "axios";

export const Db = () => {
  return axios.create({
    baseURL: "http://localhost:8081/",
  });
};
export const Scryfall = () => {
  return axios.create({
    baseURL: "http://api.scryfall.com/"
  })
}
