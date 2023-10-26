import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Products } from './pages/Products';
import Cart from './pages/Cart';
import ProductDescription from './pages/ProductDescription.js';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import Login from './pages/Login';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
         path:'/signup',
         element:<Signup/>
      },
      {
       path:'/login',
       element:<Login/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/products/:productId',
        element:<ProductDescription/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      }
    ]
   
  },
  {
    path:'/checkout',
    element:<Checkout/>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);