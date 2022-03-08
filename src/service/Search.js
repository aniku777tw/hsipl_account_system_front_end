import axios from "axios";
import AuthService from "./Auth.js";

async function searchUser() {
  let user = "";
  axios.defaults.headers.common["Authorization"] = AuthService.getUser();
  let postData = JSON.stringify({ name: "CarlChen" });
  await axios.post("user/15", postData).then((response) => {
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
