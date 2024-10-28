import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
        state.value -= 1
      },
    changeSlide: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, changeSlide,decrement } = counterSlice.actions;
export default counterSlice.reducer; // Export the reducer
