import React from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckBox from './FormCheckBox';

const Filters = () => {
    const {meta} = useLoaderData()
    return (
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            
            <FormInput type='search' label='search products' name='search' size='input-sm'/>
            <FormSelect name='company' label='select company' size='select-sm' list={meta.companies}/>
            <FormSelect name='category' label='select category' size='select-sm' list={meta.categories}/>
            <FormSelect name='order' label='sort by' size='select-sm' list={['a-z', 'z-a', 'high', 'low']}/>
            <FormRange name='price' label='select price' size='range-sm'/>
            <FormCheckBox name='shipping' label='free shipping' size='checkbox-sm'/>
            <button className='btn btn-primary btn-sm'>search</button>
            <Link to='/products' className='btn btn-accent btn-sm'>reset</Link>
            
        </Form>
    );
}

export default Filters;
