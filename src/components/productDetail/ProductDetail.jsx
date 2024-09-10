import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { fetchProductwithId } from '../../redux/productSlice';
import {Link, useParams} from "react-router-dom"
import { HiShoppingCart } from "react-icons/hi";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { addtoCart } from '../../redux/cartSlice';
import toast from 'react-hot-toast';
const ProductDetail = () => {
    const {id}= useParams()
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProductwithId(id))
   
  },[id])
  const selectedProduct =useSelector((state)=>state.product.selectedProduct)


  return (
 <div className="main-wrapper h-screen w-scree flex justify-center ">
  <div className="left w-[50%] border-r h-screen">

    <div className="product-img-container flex justify-center items-center">
      <img src={selectedProduct.thumbnail} alt="product-img" className='w-[300px]' />
    </div>


    <div className="btn my-3 flex justify-center items-center gap-3">


      <button  onClick={()=>{

        dispatch(addtoCart(selectedProduct))
      }} className='bg-[#FF9F00] rounded-md text-white p-3 w-[200px] text-center font-bold flex justify-center items-center' > <HiShoppingCart />ADD TO CART</button> 
      <Link to="/checkout"><button className='bg-[#FB641B] rounded-md w-[200px] font-semibold  text-white p-3 text-center  flex justify-center items-center'  onClick={()=>{
       
        dispatch(addtoCart(selectedProduct))
      }}> <BsLightningChargeFill />BUY NOW</button></Link>
    </div>









  </div>
  <div className="right w-[50%] p-3 h-screen">
    <div className="details">
      <p className='font-semibold text-3xl'>{selectedProduct?.title}</p>
    </div>


    <div className="rating">
      <p className='bg-[#388E3C] text-white w-[40px] p-1 rounded-md text-sm font-bold flex justify-center items-center'>4.5 <FaStar/></p>
    </div>

    <div className="description">
      <p  className='font-semibold text-base'>{selectedProduct?.description}</p>
    </div>


    <div className="price">
      <p className='font-bold text-2xl'>₹1{selectedProduct?.price}</p>
    </div>

    <div className="otherinfos">
      <p className='font-semibold text-[#878787]'>stock: in stock </p>
      <p className='font-semibold text-[#878787]'>brand: {selectedProduct?.brand}</p>
      <p className='font-semibold text-[#878787]'>warranty:{selectedProduct?.warrantyInformation} </p>
      <p className='font-semibold text-[#878787]'>delivery in :{selectedProduct?.shippingInformation}
      </p>
      <p className='font-semibold text-[#878787]'>availability status: {selectedProduct?.availabilityStatus}</p>
      <p className='font-semibold text-[#878787]'>return policy :{selectedProduct?.returnPolicy} </p>


    </div>
    <div className="reviews flex flex-col gap-2">
      <h1 className='text-xl font-bold'>Reviews</h1>
      {selectedProduct.reviews.map((review)=>{
        return (
            <div className="box  p-4">
              <div className="rating bg-[#388E3C] text-white w-[40px] rounded-md text-sm flex justify-center items-center p-1 font-bold ">
                {review.rating}<FaStar />

              </div>
              <div className="comment font-semibold">{review.comment}</div>
              <div className="name font-bold">{review.reviewerName} @{review.reviewerEmail}</div>
           
            </div>

        )
      })}
    </div>




  </div>























 </div>
  )
}

export default ProductDetail