import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./slices/wishlistslice";
import cartslice from "./slices/cartslice";

 const store=configureStore({
    reducer:{
        wishlistReducer:wishlistslice,
        cartReducer:cartslice

    }
 })

 export default store