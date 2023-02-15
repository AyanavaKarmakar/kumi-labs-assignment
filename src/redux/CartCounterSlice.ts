import { createSlice } from "@reduxjs/toolkit";

export interface CartCounterState {
  value: number;
}

const initialState: CartCounterState = {
  value: 0,
};

export const cartCounterSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value -= 1;
    },
  },
});

export const { addItem, removeItem } = cartCounterSlice.actions;
export default cartCounterSlice.reducer;
