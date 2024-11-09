import React from 'react';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

export const action = (store)=> async({request})=>{
   
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await customFetch.post('/auth/local', data);
       store.dispatch(loginUser(response.data))
       toast.success('login successfully');
      return  redirect('/')
       
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'Kindly check your credentials'
        toast.error(errorMessage)
        
    }
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loginAsGuest = async ()=>{
        try {
            const response = await customFetch.post('/auth/local', {
                identifier:'test@test.com',
                password:'secret'
            })
            dispatch(loginUser(response.data))
            toast.success('Welcome Guest User')
         navigate('/')
        } catch (error) {

            toast.error('Guest user error, Try Again')
            
        }
    }
    return (<section className='grid h-screen place-items-center'>

        <Form method='post' className='card  w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
            <h4 className='text-center text-3xl font-bold'>Login</h4>

            <FormInput type='email' label='email' name='identifier' defaultValue='test@test.com' />
            <FormInput type='password' label='password' name='password' defaultValue='secret' />

            <div className='mt-4'>
          <SubmitBtn text='Login'/>
          
          </div>
          <button className='btn btn-secondary ' onClick={loginAsGuest}>Guest User</button>
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
