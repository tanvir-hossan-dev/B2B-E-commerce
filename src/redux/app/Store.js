import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../features/auth/authSlice";
import { cardSlice } from "../features/card/cardSlice";

const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    card: cardSlice.reducer,
  },
});

export default Store;
