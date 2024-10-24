import React from 'react';
import { customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({params})=>{

    const response = await customFetch(`products/${params.id}`);

    return {products:response.data.data}
}


const SingleProduct = () => {
    const {products} = useLoaderData();
    const {image, title, price, description, colors}  = products;
    return (
        <div>
            
        </div>
    );
}

export default SingleProduct;
