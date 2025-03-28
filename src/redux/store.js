import { configureStore } from '@reduxjs/toolkit';
import { campersSlise } from './campersSlice';
import { filterSlice } from './filterSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    campers: campersSlise.reducer,
    favorites: favoritesReducer,
  },
});
