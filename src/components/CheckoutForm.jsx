import React from 'react';
import { Form } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';


const action = (store) => async()=>{

    return null;

}

const CheckoutForm = () => {
    return (
        <Form method='POST' className='flex flex-col gay-y-4'>
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
