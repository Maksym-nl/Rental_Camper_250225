import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById } from './operation';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  camper: null,
  isLoading: false,
  error: null,
};
export const camperSliceById = createSlice({
  name: 'camperById',
  initialState,
  reducers: {
    clearCamperDetails: state => {
      state.camper = null;
      state.error = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.rejected, handleRejected),
});

export const { clearCamperDetails } = camperSliceById.actions;
export default camperSliceById.reducer;
