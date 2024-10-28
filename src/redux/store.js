import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'; // Import the reducer, not the action

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
