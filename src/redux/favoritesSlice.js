import { createSlice } from '@reduxjs/toolkit';

// Получаем избранные машины из localStorage при инициализации
const loadFavoritesFromStorage = () => {
  try {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

// Сохраняем избранные машины в localStorage
const saveFavoritesToStorage = favorites => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: loadFavoritesFromStorage(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      // Проверяем, нет ли уже этой машины в избранном
      if (!state.items.find(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
        saveFavoritesToStorage(state.items);
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveFavoritesToStorage(state.items);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
