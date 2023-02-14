import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetaiInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const {changeDetaiInfoAction} = detailSlice.actions

export default detailSlice.reducer
