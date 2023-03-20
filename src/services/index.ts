import axios from "axios";

export const API = axios.create({
    baseURL: `https://inshorts.deta.dev`,
    timeout: 5000,
});
