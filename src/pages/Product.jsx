import React from 'react';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products'

export const loader = async ()=>{
   const response = await  customFetch(url);
  
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
