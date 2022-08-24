import {Db} from "@/services/Api";

export default {
  register(credentials) {
    return Db().post("register", credentials);
  },
  login(credentials) {
    return Db().post("login", credentials);
  },
};
