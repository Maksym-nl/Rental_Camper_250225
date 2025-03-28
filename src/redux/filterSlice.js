import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: [],
  transmission: [],
  engine: [],
  equipment: {},
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    resetFilters: state => {
      return initialState;
    },
  },
});

export const { setFilter, setLocation, setEquipment, resetFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
