import { createSlice } from '@reduxjs/toolkit';

const inintialState = {
  reting: [],
  isLoading: false,
  error: null,
};
export const retingSlice = createSlice({
  name: ' reting',
  inintialState,
});
