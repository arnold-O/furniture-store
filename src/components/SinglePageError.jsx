import React from 'react';
import { Link, useLoaderData, useRouteError } from 'react-router-dom';
import { formatprice } from '../utils';

const SinglePageError = () => {
    const error  = useRouteError()
    return (
      
            <h4 className='font-bold text-4xl'>There was an Error...</h4>
       
    );
}

export default SinglePageError;
