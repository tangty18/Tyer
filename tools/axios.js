import axios from "axios";

export const fetchData = axios.create({
  baseURL: "http://localhost:3000" + "/api",
  timeout: 1000,
});
