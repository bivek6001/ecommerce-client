import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js"
import productSlice from "./productSlice.js"

import orderSlice from "./orderSlice.js"

import cartSlice from "./cartSlice.js"


const store= configureStore({
    reducer:{
        user:userSlice,
        product:productSlice,
        order:orderSlice,
        cart:cartSlice,
    }
})

export default store;