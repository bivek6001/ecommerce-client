import React from 'react'
import Home from './Home'
import Cart from './components/cart/Cart';

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Checkout from './components/checkout/Checkout';

import ProductDetail from './components/productDetail/ProductDetail';
import Notfound from './Notfound.jsx'
import Profile from './components/profile/Profile';
import AccountPrivacy from './components/profile/AccountPrivacy.jsx';
import Order from './components/profile/Order.jsx';
import Logout from './components/profile/Logout.jsx';
import Address from './components/profile/Address.jsx';
import Test from './Test.js';
import ProtectedRoute from './ProtectedRoute.js';
import Navbar from './components/navbar/Navbar.jsx';
import OrderSuccess from './OrderSuccess.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <ProtectedRoute><Home/></ProtectedRoute> 
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
    element:<ProtectedRoute><Cart/></ProtectedRoute>
  },
  {
    path:"/checkout",
    element:<ProtectedRoute><Checkout/></ProtectedRoute>
  },
{
  path:"/detail/:id",
  element:<ProtectedRoute><Navbar><ProductDetail/></Navbar></ProtectedRoute>
},{
  path:"/order-success",
  element:<ProtectedRoute><OrderSuccess/></ProtectedRoute>
},
{
  path:"*",
  element:<ProtectedRoute><Notfound/></ProtectedRoute>
},

{path:"/profile",
  element:<ProtectedRoute><Profile/></ProtectedRoute>,
  children:[{
    path:"/profile/order",
    element:<Order/>
  },{
    path:"/profile/privacy",
    element:<AccountPrivacy/>
  },{
    path:"/profile/logout",
    element:<Logout/>
  },
  ,{
    path:"/profile/address",
    element:<Address/>
  }
]
},
{
  path:"/test",
  element:<Test/>,
  
}
]);

const App = () => {
  return (

    <RouterProvider router={router} >
   
    </RouterProvider>
  )
}

export default App