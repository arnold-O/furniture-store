import React from 'react';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';


export const loader =(store)=> async({request})=>{

    const user = store.getState().userState.user;
    console.log(user);
    if(!user){
        toast.warn('you must be login to view orders')

       
        return redirect('/login')
    }
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

    try {
        const response = await customFetch('/orders',{params,

            headers:{
                Authorization:`Bearer ${user.token}`
            }
        })
        console.log(response.data.data,);

        return  {orders: response.data.data, meta:response.data.meta}
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'There was an error placing your order'
    toast.error(errorMessage);

    if(error.response.status === 401 || 403){
            return redirect('/login')
    }
    return null
        
    }
}

const Orders = () => {
    return (
        <div>
            
        </div>
    );
}

export default Orders;
