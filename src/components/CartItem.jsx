import React from 'react';
import { GenerateAmountOfItems } from '../utils/utils-index';
import { formatprice } from '../utils';
import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../features/cart/cartSlice';

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const {cartID, title, price, image, amount , company, itemColor} = cartItem
    const removeItemFromCart = ()=>{
        dispatch(removeItem({cartID}))
    }
    const handleAmount = (e)=>{
       dispatch(editItem({cartID, amount:parseInt(e.target.value)}))
    }
    return (
        <main key={cartID} className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b pb-8 border-base-300 last:border-b-0'>
            <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:w-32 sm:h-32 object-cover' />
            <div className='sm:ml-16 sm:w-48'>

                <h3 className="capitalize font-medium">{title}</h3>
                <h4 className="capitalize text-sm text-neutral-content">{company}</h4>
            {/* color */}
            <p className='mt-2 flex items-center text-sm gap-x-2 capitalize'>
                <span>color :</span> <span className='badge badge-sm' style={{backgroundColor:itemColor}}></span>
            </p>



            </div>
            <div className='sm:ml-24'>
            {/* Amount */}
            <div className='form-control max-w-xs'>
                <label htmlFor="amount" className="label p-0">
                    <span className='label-text'>Amount</span>
                </label>
                <select name="amount" id="amount" className="mt-2 select select-base select-bordered select-xs" value={amount} onChange={handleAmount} >
                    {GenerateAmountOfItems(amount + 5)}
                </select>
            </div>

               {/* Remove */}
               <button className="mt-2 link link-primary link-hover text-sm" onClick={removeItemFromCart}>Remove</button>



            </div>
            {/* Price */}
            <p className="font-medium sm:ml-auto">
                {formatprice(price)}

            </p>
           
        </main>
    );
}

export default CartItem;
