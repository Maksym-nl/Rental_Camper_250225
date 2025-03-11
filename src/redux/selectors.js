import { createSelector } from '@reduxjs/toolkit';
export const getCampers = state => state.campers.items;
export const getFilter = state => state.filter;

export const getFilterCampers = createSelector(
  [getCampers, getFilter],
  (items, filter) => {
    return items.filter(camper =>
      camper.location.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
