import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://dattebayo-api.onrender.com',
})