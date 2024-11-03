import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
    const {meta} = useLoaderData();
    console.log(meta);
    const {pageCount, page } = meta.pagination;

    const pages = Array.from({length:pageCount}, (_, index)=>{
      
        return index + 1;
    })
    const navigate = useNavigate()
const {search, pathname} = useLocation();

    const handleChange = ()=>{
        const searchParams = new URLSearchParams(search)
        searchParams.set('page', pageCount);
        navigate(`${pathname}?${searchParams.toString()}`)
        
    }
    if(pageCount < 2) return null;
    return (
        <div className='mt-12 flex justify-end join'>

            <div className='join'>
                <button className='btn btn-xs sm:btn-md join-item' onClick={()=>{

                    let prevPage = page - 1;
                    if(prevPage < 1) prevPage = pageCount
                    handleChange(prevPage)}} >
                    prev
                </button>
                {pages.map((pageNumber)=>{
                    return <button className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber == page ? 'bg-base-300 border-base-300': ''}`}key={pageNumber} onClick={()=>handleChange(pageNumber)}>{pageNumber}</button>
                })}
                <button className='btn btn-xs sm:btn-md join-item' onClick={()=>{

                
                    let nextPage = page + 1;
                    if(nextPage > pageCount) nextPage = 1
                    handleChange(nextPage)}}>
                    next
                </button>

            </div>
            
        </div>
    );
}

export default PaginationContainer;
