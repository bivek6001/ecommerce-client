import  {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user:null,
    value:0
}

const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        logoutUser:(state,action)=>{
            state.user=null
        }
    }
})

export const {setUser,logoutUser}= userSlice.actions
export default userSlice.reducer
