import { configureStore } from '@reduxjs/toolkit';
import { campersSlise } from './campersSlice';

export const store = configureStore({
  reducer: {
    campers: campersSlise.reducer,
  },
});
