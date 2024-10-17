import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    return (
        <div className='min-h-screen grid  place-items-center'>
            <div className='text-center'>
            <h3 className='font-semibold  text-9xl text-primary'>404</h3>
            <h5 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>page not found</h5>
            <p className='text-lg mt-6 leading-7'>Sorry we couldn' find the page you are looking for.</p>
            <Link  to='/' className='bg-blue-500 text-center btn btn-secondary mt-6'>GO BACK HOME</Link>
            </div>
            
        </div>
    );
}

export default Error;
