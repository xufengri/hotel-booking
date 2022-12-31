import { getHomeGoodPrice, getHomeHighScoreData, getHomeDiscountData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {
    getHomeGoodPrice().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountAction(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState:{
        goodPriceInfo:{},
        highScoreInfo: {},
        discountInfo: {}
    },
    reducers:{
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }){
            state.highScoreInfo = payload
        },
        changeDiscountAction(state, { payload }) {
            state.discountInfo = payload
        }
    },
})

export const { 
    changeGoodPriceInfoAction, 
    changeHighScoreInfoAction,
    changeDiscountAction 
} = homeSlice.actions
export default homeSlice.reducer