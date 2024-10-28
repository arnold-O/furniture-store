import React from 'react';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products'

export const loader = async ()=>{
   const response = await  customFetch(url);
console.log(response);
   return {products:response.data}
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
