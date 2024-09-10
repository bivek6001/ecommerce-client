import  {createSlice} from "@reduxjs/toolkit"
import toast from "react-hot-toast"
const initialState = {
   cart:[]
}

const cartSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
     addtoCart:(state,action) => {
      const existingItem = state.cart.find((item) => item._id === action.payload._id);

      if (existingItem) {
          // Show a notification that the item is already in the cart
          toast.error("Item is already in the cart");
      } else {
          // Add item to the cart if not already present
          toast.success("Item added to cart");
          state.cart.push({ ...action.payload, quantity: 1 });
       
      }
     },
     remove:(state,action) => {
        const id= state.cart.findIndex((item)=>{
            return item._id===action.payload._id
        })
        state.cart.splice(id,1)
  
        
     },
     updateCart:(state,action) => {
     

       const id= state.cart.findIndex((item)=>{
            return item._id===action.payload._id
        })
  
        const item= state.cart[id];
       state.cart.splice(id,1,{...item,quantity:+action.payload.quantity})
  
  
      
     
          
        
     
      

   
     

     },
     emptyCart:(state,action) => {
        state.cart=[]
     }
    }
})

export const {addtoCart,remove,updateCart,emptyCart}= cartSlice.actions
export default cartSlice.reducer
