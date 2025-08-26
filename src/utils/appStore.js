import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import themeReducer from "./themeSlice"
import userReducer from "./userInfoslice"
const appStore=configureStore({
    reducer:{
     cart:cartReducer,
     theme:themeReducer,
     user:userReducer
    },
});
export default appStore;