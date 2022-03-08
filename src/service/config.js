import axios from "axios";

const AxiosConfig = () => {
  axios.defaults.baseURL = "http://140.125.45.160:6969/api";
  axios.defaults.headers.post = { "Content-Type": "application/json" };
};

export default AxiosConfig;
