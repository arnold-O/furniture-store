import React from 'react';
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Product, Register, SingleProduct } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {loader as landingLoader } from './pages/Landing'
import {loader as singleProductLoader } from './pages/SingleProduct';
import {loader as productLoader } from './pages/Product';
import {action as registerAction } from './pages/Register';
import { SinglePageError } from './components';


const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
      index:true,
      element:<Landing/>,
      errorElement:<SinglePageError/>,
      loader:landingLoader
      },
      {
      path:'products',
      element:<Product/>,
      loader:productLoader
      
      },
      {
      path:'products/:id',
      element:<SingleProduct/>,
      errorElement:<SinglePageError/>,
      loader:singleProductLoader
   
      },
      {
      path:'cart',
      element:<Cart/>
      },
      {
      path:'about',
      element:<About/>
      },
      {
      path:'checkout',
      element:<Checkout/>
      },
      {
      path:'orders',
      element:<Orders/>
      }
    ]
  },
  {
    path:'login',
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path:'register',
    element:<Register/>,
    errorElement:<Error/>,
    action:registerAction
  }

])

const App = () => {
  return (<RouterProvider router={router}/>
    
  );
}

export default App;
