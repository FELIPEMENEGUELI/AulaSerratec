import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const Api = axios.create({
    baseURL: `${base_url}`
});

export const ApiProducts = axios.create({
    baseURL: "https://enderecoDaApiDoLuiz.mockapi.io"
});

export const ApiCep = axios.create({
    baseURL: "https://viacep.com.br/ws"
});