import React from 'react';
import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {

    const user = null;
    const numItemsInCart = useSelector((state)=>state.cartState.NumItemsInCart);


    if(numItemsInCart === 0){
        return <SectionTitle text='Your cart is empty'/>
    }

    return (
        <div>
          <SectionTitle text='shopping Cart'/>
          <div className='grid gap-8 lg:grid-cols-12 mt-8'>
            <div className='lg:col-span-8'>
                <CartItemsList/>
                
            </div>
            <div className='lg:col-span-4'>
                <CartTotals/>
                {user ? 
                (<Link to='/checkout' className='btn btn-primary btn-block mt-8'>
                proceed to checkout</Link>) 
                : 
                (<Link to='/login' className=' mt-8 btn btn-primary btn-block uppercase'>Please Login</Link>)}

            </div>



          </div>
        </div>
    );
}

export default Cart;
