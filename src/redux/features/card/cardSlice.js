import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const existing = state?.cards?.find((card) => card.id === action.payload.id);
      if (existing) {
        return;
      } else {
        state.cards.push(action.payload);
      }
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, deleteCard } = cardSlice.actions;
