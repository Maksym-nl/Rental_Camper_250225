import { createSelector } from '@reduxjs/toolkit';

export const getCampers = state => state.campers.items;

export const getFilter = state => state.filter;

export const getLocation = state => state.filter.location;

export const getEquipment = state => state.filter.equpment;

export const getFilterCampers = createSelector(
  [getCampers, getFilter],
  (items, filter) => {
    let filteredCars = [...items];

    // Фильтрация по локации
    if (filter.location) {
      filteredCars = filteredCars.filter(camper =>
        camper.location.toLowerCase().includes(filter.location.toLowerCase())
      );
    }

    // Фильтрация по форме
    if (filter.form.length > 0) {
      filteredCars = filteredCars.filter(camper =>
        filter.form.includes(camper.form)
      );
    }

    return filteredCars;
  }
);
