import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById } from './operation';

const initialState = {
  reting: [],
  isLoading: false,
  error: null,
};

export const retingSlice = createSlice({
  name: 'reting',
  initialState,
  reducers: {
    setReviewerRating: (state, action) => {
      state.reting = action.payload;
    },
    updateReviewerRating: (state, action) => {
      const { index, rating } = action.payload;
      if (state.reting[index] !== undefined) {
        state.reting[index] = rating;
      }
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        // Сохраняем все рейтинги от рецензентов
        state.reting =
          action.payload.reviews?.map(review => review.reviewer_rating) || [];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setReviewerRating, updateReviewerRating } = retingSlice.actions;
export default retingSlice.reducer;
