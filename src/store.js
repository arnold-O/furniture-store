import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
    reducer:{
        cartState :cartSlice,
        userState: userSlice
    },
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false
    //   }),
})