import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронное действие для загрузки камперов
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('campers');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
