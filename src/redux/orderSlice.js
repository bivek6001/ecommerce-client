import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
  order:null
}

const orderSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        increment:(state,action)=>{
            state.value++;
        }
    }
})

export const {setUser,increment}= orderSlice.actions
export default orderSlice.reducer
