import React from 'react';
import { Form } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatprice } from '../utils';

export const action = (store) => async({request})=>{

    // getting data from checkout form

    const formData = await request.formData();
    
    const {name, address} = Object.fromEntries(formData);
    console.log(name, address);

    const user =  store.getState().userState.user;

    const {cartItems, NumItemsInCart, orderTotal} =  store.getState().cartState;

    

  const info = {
    name,
    address,
    chargeTotal:orderTotal,
    orderTotal:formatprice(orderTotal),
    cartItems,
    numItemsInCart:NumItemsInCart
  }

try {
    
      const response = await customFetch.post('/orders', {
        data:info},
        {
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        }
    )
    console.log(response);
    return null
} catch (error) {
   
    return null
    
}


}

const CheckoutForm = () => {
    return (
        <Form method='POST' className='flex flex-col gap-y-4'>
            <h4 className='font-medium text-xl capitalize'>Shipping Information</h4>

            <FormInput label='first name' name='name' type='text'/>
            <FormInput label='address' name='address' type='text'/>

            <div className='mt-4'>
                <SubmitBtn text='Place your Order'/>
            </div>
            
        </Form>
    );
}

export default CheckoutForm;
