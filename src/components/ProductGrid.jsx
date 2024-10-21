import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductGrid = () => {
    const {products} = useLoaderData();
    console.log(products);
   
    return (
        <div className='p-12 grid gap-4 lg:grid-cols-3 md:grid-cols-2'>
            {products.data.map((item)=>{
                const {title,price,image} = item.attributes;
            return <Link className='card shadow-xl hover:shadow-2xl transition duration-500 w-full' key={item.id} to={ `/products/${item.id}`}  >

                <section className=' px-4 pt-4'>

                    <img src={image} alt={title} className='object rounded-xl h-64 md:h-48 w-full'  />

                    <div className="card-body items-center text-center">
                        <h2 className='card-title capitalize tracking-wide'>{title}</h2>
                        <span className='title-secondary'>{price}</span>
                    </div>

                </section>
            
            </Link>
            })}
        </div>
    );
}

export default ProductGrid;
