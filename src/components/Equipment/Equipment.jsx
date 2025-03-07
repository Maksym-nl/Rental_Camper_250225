import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCampers } from 'api/api';

export const Equipment = () => {
  const [equipments, setEquipments] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getEquipments() {
      try {
        const responce = await fetchCampers();
        setEquipments(responce);
      } catch (error) {
        console.error('Error fetching equipment:', error);
      }
    }
    getEquipments();
  }, []);

  return (
    <div>
      <ul>
        {equipments.map(equipment => {
          // Получаем только ключи объекта с помощью Object.keys()

          const keys = Object.keys(equipment);
          return (
            <li key={equipment.id}>
              <ul>
                {keys.map(key => (
                  <li key={key}>{key}</li> // Отображаем каждый ключ
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
