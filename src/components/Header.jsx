import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';

const Header = () => {
    const navigate  = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.userState.user);

    const LogoutFunction = ()=>{

        navigate('/')
        dispatch(logoutUser())
        dispatch(clearCart())
    }
    return (
        <header className='text-neutral-content bg-neutral py-2'>

            <div className='flex justify-center align-element sm:justify-end'>
                {user ? <div className='flex items-center gap-x-2 sm:gap-x-8'>
                    <p className='text-xs sm:text-sm capitalize'>hello {user.username}</p>
                    <button className='btn btn-xs btn-outline btn-primary' onClick={LogoutFunction}>logout</button>
                </div> : 

                <div className='flex gap-x-6 justify-center items-center'>
                    <Link to='/login' className='link link-hover text-xs sm:text-sm'>Sign In / Guest</Link>
                    <Link to='/register' className='link link-hover text-xs sm:text-sm'>Create Accountt</Link>
                </div>
                }
            </div>
            
        </header>
    );
}

export default Header;
