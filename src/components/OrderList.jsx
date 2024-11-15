import dayjs from 'dayjs';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderList = () => {
    const { orders, meta } = useLoaderData()
    return (
        <div className='mt-12'>
            <h4 className='mb-4 capitalize'>
                total orders : {meta.pagination.total}

            </h4>
            <div className='overflow-x-auto'>
                <table className='table table-zebra'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>address</th>
                            <th>Products</th>
                            <th>Cost</th>
                            <th className='hidden sm:block'>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((item) => {
                                const id = item.id
                                const {name, address, numItemsInCart, orderTotal, createdAt} = item.attributes;
                                const dateFormat = dayjs(createdAt).format('hh:mm a - MMM Do, YYYY')

                                return <tr>
                                   <td>{name}</td>
                                   <td>{address}</td>
                                   <td>{numItemsInCart}</td>
                                   <td>{orderTotal}</td>
                                   <td>{dateFormat}</td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default OrderList;
