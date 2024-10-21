import React from 'react';
import { Hero } from '../components';
import { customFetch } from '../utils';




const url = '/products?featured=true'


export const loader = async()=>{

    const response = await customFetch(url)

    return response.data

}

const Landing = () => {
    return (
        <div>
            <Hero/>
        </div>
    );
}

export default Landing;
