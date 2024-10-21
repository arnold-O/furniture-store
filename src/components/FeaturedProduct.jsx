import React from 'react';
import SectionTitle from './SectionTitle';
import ProductGrid from './ProductGrid';

const FeaturedProduct = () => {
    return (
        <div className='pt-24'>
            <SectionTitle text='Featured Products'/>
            <ProductGrid/>
        </div>
    );
}

export default FeaturedProduct;
