import  {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
   product:[],
   selectedProduct:null,
   loading:false
}
export const fetchProduct= createAsyncThunk("product/all",async()=>{
    const response= await axios.get("https://ecommerce-server-4xf4.onrender.com/product/all")
    return response.data.products
    
})
export const fetchProductwithId= createAsyncThunk("product/id",async(id)=>{
    const response= await axios.get(`https://ecommerce-server-4xf4.onrender.com/product/by/${id}`)
    console.log(response)
    return response.data.product
});
export const fetchProductwithBrand= createAsyncThunk("/product/brand",async (brand)=>{
    
    const response= await axios.get(`https://ecommerce-server-4xf4.onrender.com/product/filter?brand=${brand}`)
    return response.data.products
})
const productSlice = createSlice({
    name:"product",
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
        .addCase(fetchProductwithBrand.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchProductwithBrand.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
        })
    }
})

export const {setUser,increment}= productSlice.actions
export default productSlice.reducer
