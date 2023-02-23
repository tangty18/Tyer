import axios from "axios";

export const fetchData = axios.create({
  baseURL: process.env.BASE_URL + "/api",
  timeout: 10000,
});

export const fetchDataClientSite = axios.create({
  timeout: 10000,
});