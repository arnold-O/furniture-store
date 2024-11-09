import React from 'react';
import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {

    ;
    const numItemsInCart = useSelector((state)=>state.cartState.NumItemsInCart);
    const user = useSelector((state)=>state.userState.user);


    if(numItemsInCart === 0){
        return <SectionTitle text='Your cart is empty'/>
    }

    return (
        <div>
          <SectionTitle text='Shopping Cart'/>
          <div className='grid gap-8 lg:grid-cols-12 mt-8'>
            <div className='lg:col-span-8'>
                <CartItemsList/>
                
            </div>
            <div className='lg:col-span-4'>
                <CartTotals/>
                {user ? 
                (<Link to='/checkout' className='btn btn-primary btn-block mt-8 capitalize'>
                proceed to checkout</Link>) 
                : 
                (<Link to='/login' className=' mt-8 btn btn-primary btn-block uppercase'>Please Login</Link>)}

            </div>
            
          </div>
        </div>
    );
}

export default Cart;
