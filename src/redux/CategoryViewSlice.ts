import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CategoryInViewState {
  value: string;
}

const initialState: CategoryInViewState = {
  value: "Produce",
};

export const categoryInViewSlice = createSlice({
  name: "categoryInView",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = categoryInViewSlice.actions;
export default categoryInViewSlice.reducer;
