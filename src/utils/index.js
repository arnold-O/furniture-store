import axios from "axios";


const baseUrl = 'https://strspi-store-server.onrender.com/api';


export const customFetch = axios.create({
    baseURL:baseUrl,
})