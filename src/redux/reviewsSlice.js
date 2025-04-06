import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  isLoading: false,
  error: null,
};
export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase('reviews/fetchReviews/pending', state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase('reviews/fetchReviews/fulfilled', (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase('reviews/fetchReviews/rejected', (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setReviews, setLoading, setError } = reviewsSlice.actions;
export default reviewsSlice.reducer;
