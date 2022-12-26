import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'  //使用toolkit方式
import EntireReducer from "./modules/entire";
const store = configureStore({
    reducer:{
        home: homeReducer,
        entire:EntireReducer,
        
    }
})


export default store