import { useState } from "react"
import axios from "axios";

import { VscLoading } from "react-icons/vsc";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [credentials,setCredentials] =useState({
        name:"",email:"",password:""
    })
    const navigate= useNavigate()
    const [loading,setLoading]=useState(false)
    const handleInputChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          setLoading(true)
        const response= await axios.post("http://localhost:9000/user/signup",credentials)
        
        toast.success(response.data.message)
        navigate('/signin')
        setCredentials({name:"",email:"",password:""});
        


      }catch(e){
      
        toast.error(e.response.data.message)


      }
      finally{
        setLoading(false)

      }
    }







    return (
      <>
      
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://i.fbcd.co/products/resized/resized-750-500/6f2345032c698b53fe63513729ebe849c89c5d8682ce78cc2e645ee5914238d6.jpg"
              className="mx-auto h-[80px] w-[200px] object-cover"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form  method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required
                    onChange={handleInputChange}
                  
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleInputChange}
                  
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                {loading ?  <VscLoading  className="animate-spin" size={45} /> : "Signup"}
                </button>
            
               
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
             Already a memeber? <Link to="/signin">Signin</Link>
        
            </p>
          </div>
        </div>
      </>
    )
  }
  