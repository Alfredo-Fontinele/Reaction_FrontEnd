// import axios from 'axios'

// export const API_KEY = 'c985f194e3394fe78b81a55cf6909dd8'

// export const API = axios.create({
//     baseURL: `https://newsapi.org/v2/everything`,
//     timeout: 5000
// })

import axios from "axios";

export const API = axios.create({
    baseURL: `https://inshorts.deta.dev`,
    timeout: 5000,
});
