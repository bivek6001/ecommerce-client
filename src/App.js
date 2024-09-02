import React from 'react'
import Home from './Home'
import Cart from './components/cart/Cart';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Checkout from './components/checkout/Checkout';
import Product from './components/product/Product';
import ProductDetail from './components/productDetail/ProductDetail';
import Notfound from './Notfound.jsx'
import Profile from './components/profile/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Home/>
    ),
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/cart",
    element:<Cart/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  },
{
  path:"/detail/:id",
  element:<ProductDetail/>
},
{
  path:"*",
  element:<Notfound/>
},
{path:"/profile",
  element:<Profile/>
}
]);

const App = () => {
  return (

    <RouterProvider router={router} >
   
    </RouterProvider>
  )
}

export default App