import React from 'react';
import { NavLink } from 'react-router-dom';

import { CartIcon, HamburgerIcon } from './IconsComponents';

const Navbar = () => {
    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    <NavLink to='/' className='hidden lg:flex btn btn-primary text-4xl items-center'>
                    A-store</NavLink>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden '>
                        <HamburgerIcon className='h-6 w-6' />
                        </label>
                        <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-200 shadow' tabIndex={0}>
                            navbaba
                        </ul>

                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal'>
                        nav links here
                    </ul>
                </div>
                <div className='navbar-end'>
                    <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>

                    <div className='indicator'>
                    <CartIcon className='h-6 w-6' />  
                    <span className='badge badge-sm badge-[green] indicator-item'>5</span>                
                    </div>

                    </NavLink>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
