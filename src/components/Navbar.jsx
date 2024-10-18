import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { CartIcon, HamburgerIcon, MoonFillIcon, SunfillIcon } from './IconsComponents';
import NavLinks from './NavLinks';

const Navbar = () => {
    const [theme, setTheme] = useState(false);
    const handleTheme = () => {
        setTheme(!theme)
    }
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
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-200 shadow rounded-box w-52' >
                            <NavLinks />
                        </ul>

                    </div>
                </div>
                <div className='navbar-center hidden lg:flex '>
                    <ul className='menu menu-horizontal'>
                        <NavLinks />
                    </ul>
                </div>
                <div className='navbar-end'>
                    {/* theme */}
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleTheme} />

                        {/* sun icon */}
                        <SunfillIcon className='swap-on h-4 w-4' />

                        {/* moon icon */}
                        <MoonFillIcon className='swap-off h-4 w-4' />
                    </label>


                    {/* Cart */}
                    <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>

                        <div className='indicator'>
                            <CartIcon className='h-6 w-6' />
                            <span className='badge badge-sm badge-primary indicator-item'>5</span>
                        </div>

                    </NavLink>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
