import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
           <section className='align-element py-8 '>
           <Outlet/>
           </section>
        </div>
    );
}

export default HomeLayout;
