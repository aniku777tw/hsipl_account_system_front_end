import axios from "axios";

async function login(username, password) {
  let postData = JSON.stringify({ username: username, password: password });
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

async function signup(name, username, password, checkPassword, email, phone) {
  let postData = JSON.stringify({
    name: name,
    username: username,
    password: password,
    checkPassword: checkPassword,
    mail: email,
    phoneNum: phone,
  });
  await axios.post("user/signup", postData).then((response) => {
    if (response.data) {
      console.log(JSON.stringify(response.data));
    }
    return response.data;
  });
}

const AuthService = {
  getUser,
  login,
  signup,
};

export default AuthService;
