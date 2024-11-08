import React from 'react';

const CartItem = ({cartItem}) => {
    const {cartID, title, price, image, amount , company, itemColor} = cartItem
    return (
        <main key={cartID} className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b pb-8 border-base-300 last:border-b-0'>
            <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:w-32 sm:h-32 object-cover' />
            <div className='sm:ml-16'>

                <h3 className="capitalize font-medium">{title}</h3>
                <h4 className="capitalize text-sm text-neutral-content">{company}</h4>
            {/* color */}
            <p className='mt-2 flex items-center text-sm gap-x-2 capitalize'>
                <span>color :</span> <span className='badge badge-sm' style={{backgroundColor:itemColor}}></span>
            </p>

            </div>
            {/* Amount */}

            {/* Remove */}
            {/* Price */}
           
        </main>
    );
}

export default CartItem;
