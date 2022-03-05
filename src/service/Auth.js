import axios from "axios";

const config = {
  baseURL: "http://140.125.45.160:6969/api",
  headers: { "Content-Type": "application/json" },
};

async function login(username, password) {
  let postData = JSON.stringify({ username: "user", password: "password" });
  await axios.post("user/login", postData, config).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data.token));
    }
    return response.data.token;
  });
}

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  getUser,
  login,
};

export default authService;
