import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Loading, Navbar } from '../components';

const HomeLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading'
    return (
        <div>
            <Header/>
            <Navbar/>
            {isLoading ? <Loading/> : ( 
                 <section className='align-element py-8 '>
                 <Outlet/>
                 </section>
            )}
          
        </div>
    );
}

export default HomeLayout;
