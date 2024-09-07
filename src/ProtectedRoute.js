import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
const user= useSelector((state)=>state.user.user);
const navigate= useNavigate();

useEffect(()=>{
        if(!user){
            navigate('/signin', {replace: true});
        }
   
},[])

  return children;

}

export default ProtectedRoute