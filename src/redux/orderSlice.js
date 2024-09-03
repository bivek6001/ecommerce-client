import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
  orders:[]
}

const orderSlice = createSlice({
    name:"Order",
    initialState,
    reducers:{
        setOrder:(state,action)=>{
            state.orders.push(action.payload);
        }
    }
})

export const {setOrder}= orderSlice.actions
export default orderSlice.reducer
