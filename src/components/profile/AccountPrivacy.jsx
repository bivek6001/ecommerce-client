import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const AccountPrivacy = () => {
  return (
    <div className='p-3'>
        <h1 className=' text-xl font-bold'>Account privacy and policy</h1>
        <p className='font-semibold text-sm text-[#4F4F4F]'>We i.e. "eCommerce Private Limited", are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount.</p>
        <div className='rounded-md border flex p-3  items-center my-3'>
        <AiFillDelete size={24} className='text-red-600' />
        <p className='font-semibold ml-3'>Request to delete Account</p>
        </div>
       
    </div>
  )
}

export default AccountPrivacy