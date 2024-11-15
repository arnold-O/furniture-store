import React from 'react';
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrderList, PaginationContainer, SectionTitle } from '../components';


export const loader =(store)=> async({request})=>{
    const user = store.getState().userState.user;
    if(!user){
        toast.warn('you must be login to view orders')
        return redirect('/login')
    }
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
    console.log(params);

    try {
        const response = await customFetch('/orders',{params,

            headers:{
                Authorization:`Bearer ${user.token}`
            }
        })

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
    const {meta} = useLoaderData();

    if(meta.pagination < 1){
        return <SectionTitle text='Please make an Order'/>
    }
    return (
        <>
        <SectionTitle text='Your Orders'/>
        <OrderList/>
        <PaginationContainer />

            
        </>
    );
}

export default Orders;
