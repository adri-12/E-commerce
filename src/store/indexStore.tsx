import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

type RootState = {
  auth: {
    isLoggedIn: boolean;
  };
};

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
export type { RootState };
