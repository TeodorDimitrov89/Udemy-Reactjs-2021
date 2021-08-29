import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case 'increase':
//       console.log(action.amount);
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case 'decrement':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case 'toggle':
//       return {
//         ...state,
//         isVisible: !state.isVisible,
//       };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// reducer: {
//   counter: counterSlice.reducer, // if we have more than one reducer
// },



export default store;
