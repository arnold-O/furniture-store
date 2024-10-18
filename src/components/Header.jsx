import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='text-neutral-content bg-neutral py-2'>

            <div className='flex justify-center align-element sm:justify-end'>
                <div className='flex gap-x-6 justify-center items-center'>
                    <Link to='/login' className='link link-hover text-xs sm:text-sm'>Sign In / Guest</Link>
                    <Link to='/register' className='link link-hover text-xs sm:text-sm'>Create Accountt</Link>
                </div>

            </div>
            
        </header>
    );
}

export default Header;
