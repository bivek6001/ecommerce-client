
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// import { useSelector } from 'react-redux'
import { useDispatch,useSelector } from 'react-redux'
import { remove,updateCart } from '../../redux/cartSlice'
import {toast} from "react-hot-toast"
import { Link } from 'react-router-dom'


export default function Cart() {
    const [open, setOpen] = useState(true)
    const cart= useSelector((state)=>state.cart.cart)
    // console.log(cart)
    const dispatch=useDispatch();
    const total= cart?.reduce((total,current)=>{
      // console.log(total)
      return total+current.price*current.quantity
    },0)
  
    console.log(total)
  
    return (
        <>
        {cart.length>=1 ?    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white p-3">
            <h1 className='text-2xl '>Cart</h1>
        <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {cart.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={product.thumbnail}
                                  src={product.thumbnail}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
  
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.href}>{product.name}</a>
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty   <select name="quantitiy" onChange={(e)=>{
                                    // console.log(e.target.value);
                                    dispatch(updateCart({_id:product._id,quantity:+e.target.value}))
                                  }} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select></p>
                                  
                                  <div className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>{
                                      toast.success("item removed successfully")
                                       dispatch(remove({_id:product._id}))
                                    }}>
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  
  
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{total}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link to="/checkout"
                       
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div> 
                  </div> :<div className='h-screen w-screen flex justify-center items-center flex-col gap-3'>
                    
                    <img src="https://cdn.zeptonow.com/production///tr:w-100,ar-100-100,pr-true,f-auto,q-80/app/svg/empty_cart_v2.svg" alt="empty cart" />
                    <p className='font-semibold text-xl'>Oops! Your Cart is empty Now</p>
                  <Link to="/">  <button className='w-[400px] bg-black h-[40px] text-white font-bold rounded-md'> browse products</button></Link>
                    </div>}
     
        </>
    )
}
