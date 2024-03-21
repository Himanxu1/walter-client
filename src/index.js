import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Products } from './pages/Products';
import Cart from './pages/Cart';
import ProductDescription from './pages/ProductDescription.js';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedRoutes from './utils/protectedRoutes/ProtectedRoutes.js';

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(token ? true : false);
  }, []);

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
          element: <ProtectedRoutes isSignedIn={isAuthenticated}><Products/></ProtectedRoutes>
        },
        {
          path:'/products/:productId',
          element:<ProtectedRoutes isSignedIn={isAuthenticated}><ProductDescription/></ProtectedRoutes>
        },
        {
          path:'/cart',
          element:<ProtectedRoutes isSignedIn={isAuthenticated}><Cart/></ProtectedRoutes>
        },
        {
          path:'/wishlist',
          element:<ProtectedRoutes isSignedIn={isAuthenticated}><Wishlist/></ProtectedRoutes>
        }
      ]
    },
    {
      path:'/checkout',
      element:<ProtectedRoutes isSignedIn={isAuthenticated}><Checkout/></ProtectedRoutes>
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);
