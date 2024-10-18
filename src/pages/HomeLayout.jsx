import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            Hello from Layout

           <section className='align-element py-8 '>
           <Outlet/>
           </section>
        </div>
    );
}

export default HomeLayout;
