

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Profile() {
  const [agreed, setAgreed] = useState(false)
  // const createOrder= async ()=>{
  //   try{
  //     const response= await axios.post("http://localhost:9000/order/create",order,{
  //       headers:{
  //         token:localStorage.getItem("token")
  //       }
  //     })
  //   }
  //   catch(err){}
  //   finally{}
  // }

  return (
  
    <>
    <div className="main-wrapper h-screen w-screen bg-white flex justify-center items-center">
      <div className="orders shadow-md h-[80%] w-[85%] p-3  ">
        <h1 className='text-3xl font-bold'>Your orders</h1>
        <div className="order">
          <div><img src="https://blinkit.com/8d522e40eef136ba3498.png" alt="product"  /></div>
        </div>
        <div className="order-details">
          <p className='font-bold'>ORD903621625  ·  ₹137</p>
        </div>
        <div className="status bg-[#999999] text-white rounded-lg w-[160px] text-base font-bold">
        CANCELLED
        </div>

      </div>
    </div>
    </>
  )
}
