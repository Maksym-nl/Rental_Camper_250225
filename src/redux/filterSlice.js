import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  location: '',
  form: [],
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    form: ['panelTruck', 'fullyIntegrated', 'alcove'],
    transmission: ['automatic', 'manual'],
    engine: ['diesel', 'hybrid', 'petrol'],
    equpment: {
      AC: true,
      bathroom: true,
      kitchen: true,
      TV: true,
      radio: true,
      refrigerator: true,
      microwave: true,
      gas: true,
      water: true,
    },
  },
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setEqupment: (state, action) => {
      state.equpment = action.payload;
    },
    resetFilters: state => {
      return initialState;
    },
  },
});
export const { setFilter, setLocation, setEqupment, resetFilters } =
  filterSlice.actions;
