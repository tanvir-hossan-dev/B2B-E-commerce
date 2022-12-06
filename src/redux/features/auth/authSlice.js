import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      const auth = {
        user: state.user,
        token: state.token,
      };
      localStorage.setItem("Auth", JSON.stringify(auth));
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("Auth");
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
