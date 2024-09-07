import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
  const user= useSelector((state)=>state.user?.user);
  const orders= user.orders;

  return (
    <div className="orders shadow-md h-[100%] w-[100%] p-3  ">
        <h1 className='text-2xl font-bold'>Your orders</h1>
    {orders.map((order)=>{
      console.log(order)
      return (
        <div className=' flex items-center gap-3 border-b p-3'>
        <div className="order">
          <div><img src="https://blinkit.com/8d522e40eef136ba3498.png" alt="product"  /></div>
        </div>
        <div className="order-details">
          <p className='font-bold text-base'>Order id: #{order._id}</p>
          <p className='text-sm text-[#6B747F]'>    placed on : {order.createdAt.split("T")[0]}</p>
        </div>
        <div className="status bg-[#999999] text-white rounded-lg w-[80px] p-1 text-sm font-semibold text-center">
        {order.status}
        </div>
    
        </div>
      )
    })}

      </div>
  )
}

export default Order