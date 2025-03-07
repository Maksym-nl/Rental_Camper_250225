import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCamperById } from 'api/api';
export const VehicleDetails = () => {
  const [vehicles, setVehicles] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function getVehicles() {
      try {
        const responce = await fetchCamperById(params.id);
        setVehicles(responce);
      } catch (error) {}
    }
    getVehicles();
  }, [params.id]);
  return (
    <div>
      <ul>
        {vehicles.map(vehicle => {
          return (
            <li key={vehicle.id}>
              <p>Form: {vehicle.form}</p>
              <p>Length: {vehicle.length}</p>
              <p>Width: {vehicle.width}</p>
              <p>Height: {vehicle.height}</p>
              <p>Tank: {vehicle.tank}</p>
              <p>Consumption: {vehicle.consumption}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
