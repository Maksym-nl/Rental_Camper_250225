import { configureStore } from '@reduxjs/toolkit';
import { campersSlise } from './campersSlice';
import { filterSlice } from './filterSlice';
import favoritesReducer from './favoriteSlice';
import camperSliceById from './camperSliceById';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    campers: campersSlise.reducer,
    favorites: favoritesReducer,
    camperById: camperSliceById,
  },
});
