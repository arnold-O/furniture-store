import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            Hello from LAyout

            <Outlet/>
        </div>
    );
}

export default HomeLayout;
