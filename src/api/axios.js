import axios from "axios";
// const BASE_URL = 'http://localhost:3000/api';
// const BASE_URL = 'https://api-adopet.gilbertosilva.dev/api';
const BASE_URL = "https://adopet-txwv.onrender.com/api";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
