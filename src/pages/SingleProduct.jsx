import React, { useState } from 'react';
import { customFetch, formatprice } from '../utils';
import { Link, useLoaderData } from 'react-router-dom';

export const loader = async ({ params }) => {

    const response = await customFetch(`products/${params.id}`);

    return { products: response.data.data }
}


const SingleProduct = () => {
    const { products } = useLoaderData();
    const { image, title, price, description, colors, company } = products.attributes;
    const [itemColor, setItemColor] = useState(colors[0])
    const [amount, setAmount] = useState(1);
    const handleAmount = (e) => {
        setAmount(e.target.value)

    }
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
                    <div className='mt-6'>

                        <h4 className='capitalize tracking-wide font-medium'>Colors</h4>

                        <div className="mt-2">
                            {colors.map((item) => {

                                return <button key={item} className={` badge w-6 h-6 mr-2 ${item === itemColor && 'border-2 border-secondary'}`} onClick={(() => setItemColor(item))} style={{ backgroundColor: item }}></button>

                            })}
                        </div>

                    </div>
                    <div className="form-control w-full max-w-xsm">
                        <label htmlFor='amount' className='label'>
                            <h4 className='text-md font-medium tracking-wide'>Amount</h4>
                        </label>
                        <select id="amount" value={amount} onChange={handleAmount} className='select select-secondary select-bordered select-md' >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                    </div>
                    <div className="mt-8">
                        <button className="btn btn-secondary btn-md uppercase" onClick={()=> console.log('add to cart')}>ADD to Cart</button>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default SingleProduct;
