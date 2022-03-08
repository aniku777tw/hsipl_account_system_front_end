import axios from "axios";

async function login(username, password) {
  let postData = JSON.stringify({ username: "user", password: "password" });
  await axios.post("user/login", postData).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data.token));
    }
    return response.data.token;
  });
}

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  getUser,
  login,
};

export default AuthService;
