import React from 'react';
import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';


export const loader = (store) => ()=>{
    const user = store.getState().userState.user

    if(!user){

        toast.warning('You must be login to checkout');

        return redirect('/login')

    }

    return null;


}

const Checkout = () => {

    const cartItems = useSelector((state)=>state.cartState.cartTotal)

    if(cartItems === 0){
        return <SectionTitle  text='Your Cart is Empty'/>
    }

    return (
        <>
        <SectionTitle text='Place Your Order'/>
        <div className='grid gap-8 md:grid-cols-2 mt-8'>
            <CheckoutForm/>
            <CartTotals/>
        </div>
            
        </>
    );
}

export default Checkout;
