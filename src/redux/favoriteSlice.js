import { createSlice } from '@reduxjs/toolkit';
//!Функция для загрузки избранного из localStorage
const loadFavoritesFromStorage = () => {
  try {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      return JSON.parse(favorites);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};
//!Функция для сохранения избранного в localStorage
const saveFavoritesToStorage = favorites => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};

const initialState = {
  items: loadFavoritesFromStorage(),
};
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.items.find(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
        saveFavoritesToStorage(state.items);
      }
    },
    removeFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveFavoritesToStorage(state.items);
    },
  },
});

export const { addToFavorites, removeFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
