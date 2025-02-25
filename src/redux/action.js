import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchCampersRequest = createAction('camper/fetchCampersRequest');
//fullfiled
export const fetchCampersSucces = createAction('camper/fetchCampersSucces');
//rejected
export const fetchCampersError = createAction('camper/fetchCampersError');
