import axios from 'axios';

export const Api = axios.create({
    baseURL: `${import.meta.env.VITE_URL_API}`
});