// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as campersActions from './action';

// const entities = createReducer([], {
//   [campersActions.fetchCampersSucces]: (_, action) => action.payload,
// });
// const isLoading = createReducer(false, {
//   [campersActions.fetchCampersRequest]: () => true,
//   [campersActions.fetchCampersSucces]: () => false,
//   [campersActions.fetchCampersError]: () => false,
// });
// const error = createReducer(null, {
//   [campersActions.fetchCampersError]: (_, action) => action.payload,
//   [campersActions.fetchCampersRequest]: () => null,
// });
// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });
