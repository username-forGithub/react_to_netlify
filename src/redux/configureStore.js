import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './slices/greetingSlice';

const Store = configureStore({
  reducer: {
    textobj: greetingSlice.reducer,
  },
});

export default Store;
