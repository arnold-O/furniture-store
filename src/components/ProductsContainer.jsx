import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import { useLoaderData } from 'react-router-dom';
import { BsFillGridFill, BsList } from "react-icons/bs";
import PaginationContainer from './PaginationContainer';


const ProductsContainer = () => {
    const {meta} = useLoaderData();
    const [layout, setLayout] = useState('grid');
    const totalProducts = meta.pagination.total;

    const activeBtnStyle = (style)=>{
        return `text-xl btn btn-circle btn-sm ${style ===layout ? 'btn-primary text-primary-content':'btn-ghost text-based-content'}`
    }
    
    return (<>

    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-6'>
        <h4 className='font-medium txt-md'>
            {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
            <button type='button' onClick={()=>setLayout('grid')} className={activeBtnStyle('grid')}>
            <BsFillGridFill />
            </button>
            <button type='button' onClick={()=>setLayout('list')} className={activeBtnStyle('list')}>
            <BsList />
            </button>
        </div>

    </div>

        <div>
            {
                totalProducts ===  0 ? (<h5 className='text-2xl mt-16'>Sorry, no product matched your search</h5> ) : layout == 'grid' ? (
                    <ProductGrid/>) : (<ProductList/>)            
            }
            
        </div>
    
    </>     
        
    );
}

export default ProductsContainer;
