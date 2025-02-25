import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

// Асинхронное действие для загрузки камперов
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Ошибка загрузки данных');
    }
    return await response.json();
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
