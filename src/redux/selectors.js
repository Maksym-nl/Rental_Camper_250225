import { createSelector } from '@reduxjs/toolkit';

export const getCampers = state => state.campers.items;

export const getFilter = state => state.filter;

export const getLocation = state => state.filter.location;

export const getEquipment = state => state.filter.equipment;

export const getFavorites = state => state.favorites.items;
// Селектор для получения данных о конкретном кемпере
export const getCamperById = state => state.camperById.camper;
export const getCamperLoading = state => state.camperById.isLoading;
export const getCamperError = state => state.camperById.error;

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
    if (filter.transmission.length > 0) {
      filteredCars = filteredCars.filter(camper =>
        filter.transmission.includes(camper.transmission)
      );
    }
    if (filter.engine.length > 0) {
      filteredCars = filteredCars.filter(camper =>
        filter.engine.includes(camper.engine)
      );
    }

    // Фильтрация по оборудованию
    if (filter.equipment && Object.keys(filter.equipment).length > 0) {
      filteredCars = filteredCars.filter(camper =>
        Object.keys(filter.equipment).every(key => camper[key])
      );
    }

    return filteredCars;
  }
);
