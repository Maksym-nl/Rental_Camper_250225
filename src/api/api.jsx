// import axios from 'axios';
// axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

// export const fetchCampers = async (searchValue = '') => {
//   try {
//     // Выполняем запрос с фильтрацией по параметру query
//     const response = await axios.get(`/campers`, {
//       params: { query: searchValue },
//     });
//     return response.data || [];
//   } catch (error) {
//     console.error('Error fetching campers:', error);
//     return [];
//   }
// };

// export const fetchCamperById = async id => {
//   try {
//     const response = await axios.get(`/campers/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching camper with id ${id}:`, error);
//     return null;
//   }
// };
