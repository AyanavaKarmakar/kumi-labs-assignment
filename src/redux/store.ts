import { configureStore } from "@reduxjs/toolkit";
import cartCounterReducer from "./CartCounterSlice";
import categoryInViewReducer from "./CategoryViewSlice";

export const store = configureStore({
  reducer: {
    cartCounter: cartCounterReducer,
    categoryInView: categoryInViewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
