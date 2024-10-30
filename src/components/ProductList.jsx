import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { formatprice } from '../utils';

const ProductList = () => {
    const {products} = useLoaderData();
   
   
    return (
        <div className='mt-12 grid gay-y-8'>
            {products.data.map((item)=>{
                const {title,price,image, company} = item.attributes;
            const priceFormat =  formatprice(price)
            return <Link className=' p-8 rounded-lg flex flex-col sm:flex-row gay-y-4 flex-wrap bg-base-300 shadow-xl hover:shadow-2xl duration-300 group' key={item.id} to={ `/products/${item.id}`}  >

                {/* <section className=' px-4 pt-4'> */}

                    <img src={image} alt={title} className='h-24 w-24  object-cover rounded-lg  sm:h-32 sm:w-32 group-hover:scale-105 transiion duration-300'  />

                    <div className="ml-0 sm:ml-16">
                        <h3 className='capitalize font-medium text-lg '>{title}</h3>
                        <h4 className='capitalize text-md text-neutral-content'>{company}</h4>
                    </div>

                {/* </section> */}
            
            </Link>
            })}
        </div>
    );
}


export default ProductList;
