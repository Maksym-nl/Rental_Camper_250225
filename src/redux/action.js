import { createAction } from '@reduxjs/toolkit';

//pending
export const fetchCampersRequest = createAction('camper/fetchCampersRequest');
//fullfiled
export const fetchCampersSucces = createAction('camper/fetchCampersSucces');
//rejected
export const fetchCampersError = createAction('camper/fetchCampersError');

//pending
export const fetchCamperByIdRequest = createAction(
  'camper/fetchCamperByIdRequest'
);
//fullfiled
export const fetchCamperByIdSuccess = createAction(
  'camper/fetchCamperByIdSuccess'
);
//rejected
export const fetchCamperByIdError = createAction('camper/fetchCamperByIdError');
// Действия для загрузки отзывов
export const fetchReviewsRequest = createAction('reviews/fetchReviewsRequest');
export const fetchReviewsSuccess = createAction('reviews/fetchReviewsSuccess');
export const fetchReviewsError = createAction('reviews/fetchReviewsError');

// // Действия для загрузки рейтинга
// export const fetchRetingRequest = createAction('reting/fetchRetingRequest');
// export const fetchRetingSuccess = createAction('reting/fetchRetingSuccess');
// export const fetchRetingError = createAction('reting/fetchRetingError');

// Действия для работы с рейтингами рецензентов
export const setReviewerRating = createAction('reting/setReviewerRating');
export const updateReviewerRating = createAction('reting/updateReviewerRating');
