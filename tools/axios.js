import axios from "axios";
import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
axios.defaults.withCredentials = true;
export const fetchData = axios.create({
  baseURL: process.env.BASE_URL + "/api",
  timeout: 10000,
});

export const fetchDataClientSite = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
});

export const fetchDataNew = axios.create({
  baseURL: publicRuntimeConfig.BACKEND_URL,
});
