import React from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';


const Register = () => {

        return (<div className='h-screen grid place-items-center'>
    <Form method='post' className='card  w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>

        <FormInput type='text' label='Username' name='username' />
        <FormInput type='email' label='Email' name='email' />
        <FormInput type='password' label='password' name='password' />

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
