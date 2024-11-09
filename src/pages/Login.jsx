import React from 'react';
import { Form, Link, redirect } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = (store)=> async({request})=>{
   

    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await customFetch.post('/auth/local', data);
       store.dispatch(loginUser(response.data))
        toast.success('login successfully');
       
        redirect('/')
    } catch (error) {
        
    }

    return null

}

const Login = () => {
    return (<section className='grid h-screen place-items-center'>

        <Form method='post' className='card  w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
            <h4 className='text-center text-3xl font-bold'>Login</h4>

            <FormInput type='email' label='email' name='identifier' defaultValue='test@test.com' />
            <FormInput type='password' label='password' name='password' defaultValue='secret' />

            <div className='mt-4'>
          <SubmitBtn text='Login'/>
          
          </div>
          <button className='btn btn-secondary '>Guest User</button>
          <p className='text-center'>
            Not a member yet ? 
            <Link to='/register'  className='link link-hover link-primary capitalize ml-2'>
            Register
            
            </Link>
           </p>
        </Form>

    </section>
       
      
    );
}

export default Login;
