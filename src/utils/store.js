import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer:{
        cart:cartSlice,
        wish:wishlistSlice,
        user:userSlice
    }
})

export default store;
