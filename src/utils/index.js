import axios from "axios";


const baseUrl = 'https://strapi-store-server.onrender.com/api';


export const customFetch = axios.create({
    baseURL:baseUrl,
})

export const formatprice = (price)=>{
    const NairaAmount = new Intl.NumberFormat('en-NGN', {
        currency: 'NGN',
        style: 'currency',
    }).format((price/100).toFixed(2));
    return NairaAmount
}