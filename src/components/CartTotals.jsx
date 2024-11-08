import React from 'react';
import { useSelector } from 'react-redux';
import { formatprice } from '../utils';

const CartTotals = () => {
    const {cartTotal, shipping, tax , orderTotal} = useSelector((state)=>state.cartState)
    return (
        <div className='bg-base-300 card'>
            <div className='card-body'>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                    <span>Subtotal</span>
                    <span className='font-medium'>{formatprice(cartTotal)}</span>
                </p>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                    <span>Shipping</span>
                    <span className='font-medium'>{formatprice(shipping)}</span>
                </p>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                    <span>Tax</span>
                    <span className='font-medium'>{formatprice(tax)}</span>
                </p>
                <p className='flex justify-between text-sm mt-6 border-b border-base-300 pb-2'>
                    <span>Order Total</span>
                    <span className='font-medium'>{formatprice(orderTotal)}</span>
                </p>

            </div>
            
        </div>
    );
}

export default CartTotals;
