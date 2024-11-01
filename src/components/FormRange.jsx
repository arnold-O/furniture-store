import React, { useState } from 'react';
import { formatprice } from '../utils';

const FormRange = ({label, name, size}) => {
    const step = 1000;
    const MaxPrice = 100000;
    const [selectedPrice, setSelectedPrice] = useState(MaxPrice)
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}</span>
            <span className=''>{formatprice(selectedPrice)}</span>
            </label>
            <input className={`range range-primary ${size}`} type="range" name={name} min={0} max={MaxPrice} step={step} onChange={(e)=>setSelectedPrice(e.target.value)} value={selectedPrice} />
          <div  className='flex  justify-between mt-2 w-full text-xs px-2'>
            <span className='font-bold text-md'>0</span>
            <span className='font-bold text-md'>Max : {formatprice(MaxPrice)}</span>
          </div>
        </div>
    );
}

export default FormRange;
