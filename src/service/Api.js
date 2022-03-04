import axios from "axios";

const config = {
  baseURL: "http://140.125.45.160:6969/api",
  headers: { "Content-Type": "application/json" },
};

export async function login(username, password) {
  let postData = JSON.stringify({ username: username, password: password });
  const response = await axios
    .post("user/login", postData, config)
    .then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
}
