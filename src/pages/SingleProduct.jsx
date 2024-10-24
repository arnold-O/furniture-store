import React from 'react';
import { customFetch, formatprice } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

export const loader = async ({params})=>{

    const response = await customFetch(`products/${params.id}`);

    return {products:response.data.data}
}


const SingleProduct = () => {
    const {products} = useLoaderData();
    const {image, title, price, description, colors, company}  = products.attributes;
    const priceFormat = formatprice(price)
    return (
        <div>
            <main className='text-md breadcrumbs'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Product</Link>
                    </li>
                </ul>
            </main>

            <section className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-6'>
                <img src={image} alt={title} className='w-96 h-96 rounded-lg lg:w-full object-cover' />
                <div>
                    <h1 className="capitalize text-3xl font-bold">{title}</h1>
                    <h4 className="text-xl text-neutral font-bold mt-2">{company}</h4>
                    <p className="mt-3 text-xl">{priceFormat}</p>
                    <p className="mt-6 leading-8">{description}</p>
                </div>
            </section>
            
        </div> 
    );
}

export default SingleProduct;
