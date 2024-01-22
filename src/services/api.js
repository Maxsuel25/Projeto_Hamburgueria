import axios from "axios";

const productApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
  timeout: 5 * 1000,
});

export { productApi };