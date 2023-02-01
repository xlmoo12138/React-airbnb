import { getDiscountData, getHomeGoodPriceData, getHomeHighScoreData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, {dispatch}) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   console.log(payload);
    //   state.goodPriceInfo = payload
    // }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction
} = homeSlice.actions

export default homeSlice.reducer
