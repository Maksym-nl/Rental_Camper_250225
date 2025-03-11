import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';

const handlePending = state => {
  state.campers.isLoading = true;
  state.campers.error = null;
};
const handleRejected = (state, action) => {
  state.campers.isLoading = false;
  state.campers.error = action.payload;
};
export const campersSlise = createSlice({
  name: 'campers',
  initialState: {
    campers: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers.items = action.payload;
        state.campers.isLoading = false;
      })
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected),
});
