import React from 'react';
import { useSelector } from 'react-redux';
import { SectionTitle } from '../components';

const Checkout = () => {

    const cartItems = useSelector((state)=>state.cartState.cartTotal)

    if(cartItems === 0){
        return <SectionTitle  text='Your Cart is Empty'/>
    }

    return (
        <div>
            
        </div>
    );
}

export default Checkout;
