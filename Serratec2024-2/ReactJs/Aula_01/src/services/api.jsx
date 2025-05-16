import axios from "axios";
const keyApi = import.meta.env.VITE_KEY;
const versionApi = import.meta.env.VITE_VERSION_API;

export const Api = axios.create({
  baseURL: `https://${keyApi}.mockapi.io/api/${versionApi}`
})