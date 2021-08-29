import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  isVisible: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;