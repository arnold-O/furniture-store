import React from 'react';
import { Form, Link, redirect } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async({request})=>{
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
try {
    const response = await customFetch.post('/auth/local/register', data)
    toast.success('account registered successfully');
   return  redirect('/login');
} catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'Kindly check your credentials'
    toast.error(errorMessage)
    
}
    return null
}


const Register = () => {

        return (<div className='h-screen grid place-items-center'>
    <Form method='post' className='card  w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>

        <FormInput type='text' label='Username' name='username' defaultValue='james smith1' />
        <FormInput type='email' label='Email' name='email'defaultValue='jamessmith@gmail.com' />
        <FormInput type='password' label='password' name='password' defaultValue='secret' />

        <div className='mt-4'>
            <SubmitBtn text='register' />

        </div>
        <p className='text-center'>
            Alredy have an account?
            <Link to='/login' className='link link-hover link-primary capitalize ml-2'>
                Login
            </Link>
        </p>
    </Form>

    </div>
    );
}

export default Register;
