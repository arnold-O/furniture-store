import React from 'react';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products'

export const loader = async ({request})=>{
 const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

   const response = await  customFetch(url, {
    params
   });

   return {products:response.data, meta:response.data.meta}
}

const Product = () => {
    return (
        <>
            <Filters/>
            <ProductsContainer/>
            <PaginationContainer/>
        </>
    );
}

export default Product;
