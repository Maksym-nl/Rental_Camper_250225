import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('campers');
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'camperById/fetchCamperById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const clearCamperDetails = createAsyncThunk(
  'camperById/clearCamperDetails',
  async () => {
    return null;
  }
);
