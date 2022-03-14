import axios from "axios";
import AuthService from "./Auth.js";

async function searchUser() {
  let user = "";
  axios.defaults.headers.common["Authorization"] = AuthService.getUser();
  let postData = JSON.stringify({ name: "user" });
  await axios.post("user/find/", postData).then((response) => {
    if (response.data.detail) {
      user = response.data.detail;
    }
  });
  return user;
}

const SearchService = {
  searchUser,
};

export default SearchService;
