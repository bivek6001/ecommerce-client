import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
   cart:[]
}

const cartSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
     addtoCart:(state,action) => {

    
        state.cart.push({...action.payload,quantity:1})

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
  
  
      
     
          
        
     
      

   
     

     }
    }
})

export const {addtoCart,remove,updateCart}= cartSlice.actions
export default cartSlice.reducer
