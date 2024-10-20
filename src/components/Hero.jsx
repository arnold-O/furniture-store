import React from 'react';

import img1 from '../assets/landing1.avif'
import img2 from '../assets/landing2.avif'
import img3 from '../assets/landing3.avif'
import img4 from '../assets/landing4.avif'
import { Link } from 'react-router-dom';

const imagesArray = [img1, img2, img3, img4]
const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-24 items-center'>
            {/* info section */}
            <div>
              <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>We are changing the way people shop</h1>

                <p className='mt-8 max-w-xl text-lg leading-8'>
                Most people do at least some of their initial research online, even if they ultimately choose to make their purchase at a brick-and-mortar store
                </p>
                <div className='mt-10'>
                    <Link to='/products' className='btn btn-primary uppercase text-xl font-bold'  >Our Products</Link>
                </div>
            </div>

            {/* carousel */}
            <div className='hidden h-[28rem] lg:carousel carousel-center p-5 space-x-4 bg-neutral rounded-box'>
                {imagesArray.map((item)=>{

                    return <div key={item} className='carousel-item'>
                        <img src={item} alt="" className='rounded-box h-full w-80 object-cover' />

                    </div>
                })}

            </div>
            
        </div>
    );
}

export default Hero;
