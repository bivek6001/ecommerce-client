import  {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
   product:[],
   selectedProduct:null,
   loading:false
}
export const fetchProduct= createAsyncThunk("product/all",async()=>{
    const response= await axios.get("https://ecommerce-server-4xf4.onrender.com/product")
    return response.data.products
    
})
export const fetchProductwithId= createAsyncThunk("product/id",async(id)=>{
    const response= await axios.get(`https://ecommerce-server-4xf4.onrender.com/product/${id}`)
    return response.data.product
});
const productSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        increment:(state,action)=>{
            state.value++;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.loading=true
        })
       .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
        })
      .addCase(fetchProductwithId.pending,(state)=>{
            state.loading=true
        })
       .addCase(fetchProductwithId.fulfilled,(state,action)=>{
            state.loading=false
            state.selectedProduct=action.payload
        })
    }
})

export const {setUser,increment}= productSlice.actions
export default productSlice.reducer
