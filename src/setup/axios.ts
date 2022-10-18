import axios from "axios";

const service = axios.create({
  baseURL: "https://my.api.mockaroo.com/",
  timeout: 1000,
});

export default service;
