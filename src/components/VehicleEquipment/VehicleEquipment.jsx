// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchCampers } from 'api/api';

// export const VehicleEquipment = () => {
//   const [equipments, setEquipments] = useState([]);
//   const params = useParams();

//   useEffect(() => {
//     async function getEquipments() {
//       try {
//         const responce = await fetchCampers();
//         setEquipments(responce());
//       } catch (error) {
//         console.error('Error fetching equipment:', error);
//       }
//     }
//     getEquipments();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {equipments.map(equipment => {
//           // Получаем только ключи объекта с помощью Object.keys()

//           const keys = Object.keys(equipment);
//           return (
//             <li key={equipment.id}>
//               <ul>
//                 <p>Vehicle equipment</p>
//                 {keys.map(key => (
//                   <li key={key}>{key}</li> // Отображаем каждый ключ
//                 ))}
//               </ul>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
//!==========================================
export const VehicleEquipment = () => {
  return (
    <div>
      <h3>Vehicle equipment</h3>
      <span>_______________________</span>
      <ul>
        <li>
          <button type="button">Transmission</button>
        </li>
        <li>
          <button type="button">Radio</button>
        </li>
        <li>
          <button type="button">AC</button>
        </li>
        <li>
          <button type="button">Bathroom</button>
        </li>
        <li>
          <button type="button">Kitchen</button>
        </li>
        <li>
          <button type="button">TV</button>
        </li>
      </ul>
    </div>
  );
};
