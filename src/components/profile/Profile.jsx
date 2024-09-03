

import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FcPrivacy } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import { useDispatch,useSelector } from 'react-redux';
import { logoutUser } from '../../redux/userSlice';
export default function Profile() {
  const dispatch = useDispatch();
 

  return (
  
    <div className='flex justify-center items-center h-screen w-screen'>
    <div className="main-wrapper h-[80%] w-[80vw] bg-white flex justify-center shadow-lg">
      <div className='w-[15%] flex flex-col  ' >
       <Link to="/profile"> <div className='font-semibold flex text-sm justify-evenly items-center w-[100%] h-[50px] border text-center p-3  rounded-md' ><FaMapLocationDot size={24} />My addresses</div></Link>
       <Link  to="/profile/order">   <div className='font-semibold text-sm  flex justify-evenly items-center w-[100%] h-[50px] border text-center p-3  rounded-md'><AiFillProduct size={24}/>My orders</div></Link>
       <Link  to="/profile/privacy">   <div className='font-semibold text-sm  flex justify-evenly items-center w-[100%] h-[50px] border text-center p-3  rounded-md'><FcPrivacy size={24} />Account Privacy</div></Link>
       <Link  to="/signin" onClick={()=>{
        localStorage.setItem("token","");
        dispatch(logoutUser());

       }}>    <div className='font-semibold text-sm  flex justify-evenly items-center w-[100%] h-[50px] border text-center p-3  rounded-md'><IoIosLogOut size={24} />Logout</div></Link>
      </div>
      <div className='w-[85%] border'>
      <Outlet/>
      </div>
    </div>
    </div>
  )
}
