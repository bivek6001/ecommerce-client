import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {

    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

import userSlice from "./userSlice.js"
import productSlice from "./productSlice.js"
import orderSlice from "./orderSlice.js"
import cartSlice from "./cartSlice.js"
const rootReducer= combineReducers(
    {
        
        user:userSlice,
        product:productSlice,
        order:orderSlice,
        cart:cartSlice,
    }    

)

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
   const persistedReducer = persistReducer(persistConfig, rootReducer)

   const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export default store;