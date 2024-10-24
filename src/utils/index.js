import axios from "axios";


const baseUrl = 'https://strapi-store-server.onrender.com/api';


export const customFetch = axios.create({
    baseURL:baseUrl,
})

export const formatprice = (price)=>{
    const NairaAmount = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
        minimumFractionDigits:2,
    }).format(price/100)
    return NairaAmount
}


// export const formatprice = (price)=>{
//     const NairaAmount = new Intl.NumberFormat('en-US', {
//         currency: 'USD',
//         style: 'currency',
//         minimumFractionDigits:2,
//         currencyDisplay:"symbol"
//     })
//     return NairaAmount
// }
