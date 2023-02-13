import axios from "axios";

export const fetchData = axios.create({
  baseURL: process.env.BASE_URL + "/api",
  timeout: 1000,
});

export const fetchDataClientSite = axios.create({
  timeout: 1000,
});