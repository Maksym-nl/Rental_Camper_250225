import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slise';
// import campersReducer from './campersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
