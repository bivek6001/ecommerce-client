
import { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import axios from "axios"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import { emptyCart } from '../../redux/cartSlice';
export default function Checkout() {
  const cart= useSelector((state)=>state.cart.cart)
  const ids= cart?.map((product)=>product._id)
  // console.log(id)
const navigate=useNavigate()
  const dispatch= useDispatch()
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState(
    {
      firstname:"",
      lastname:"",
      state:"",
      country:"",
      pin:"",
      address:"",
      phone:""

    }
  );
  const handleChange= (e)=>{
    setAddress({...address,[e.target.name]:e.target.value});
  }
  const handleSubmit=async (e)=>{
    async function paymentHandler(){
      const response= await axios.post("https://ecommerce-server-4xf4.onrender.com/checkout",{
        amount :9000,
        currency :"INR"
      })

      console.log(response.data.order.id)
      var options = {
        "key": "rzp_test_nKloVUIf02hQTe", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id":response.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://ecommerce-server-4xf4.onrender.com/verification",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
}
paymentHandler();
    e.preventDefault();
    try{
      setLoading(true);
      const response= await axios.post("https://ecommerce-server-4xf4.onrender.com/order/create",{
        product:ids,
        address,
        quantity:cart.length,

      },{
        headers:{
          token:localStorage.getItem("token")
        }
      })
      console.log(response);
      if(response.data.success){
        dispatch(emptyCart())
        toast.success("Order placed successfully")
        // navigate("/order-success")

      }
    }catch(e){
      console.error(e.response.data.message);
      toast.error(e.response.data.message)
    }
    finally{
setLoading(false)
    }
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Delivery Address</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
         Please provide a delivery address 
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Receiver First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstname"
                type="text"
                onChange={handleChange}
                autoComplete="given-name" required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            Receiver Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastname"
                type="text"
                onChange={handleChange}
               required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
            Address
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="address"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            State
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="state"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="pin" className="block text-sm font-semibold leading-6 text-gray-900">
            Pin code
            </label>
            <div className="mt-2.5">
              <input
                id="pin"
                name="pin"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-900">
            Country
            </label>
            <div className="mt-2.5">
              <input
                id="country"
                name="country"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Receiver Phone number
            </label>
            <div className="relative mt-2.5">
          
              <input
                id="phone-number"
                name="phone"
                type="tel"
                required
                onChange={handleChange}
                className="block w-full rounded-md  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
      
      
         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="flex justify-center  w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           {loading ? <AiOutlineLoading3Quarters size={25} className='text-center animate-spin' /> : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  )
}
