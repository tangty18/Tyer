import axios from "axios";


axios.defaults.withCredentials = true
export const fetchData = axios.create({
  baseURL: process.env.BASE_URL + "/api",
  timeout: 10000,
});

export const fetchDataClientSite = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
});