import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards = state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;
