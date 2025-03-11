import { fetchCamperById } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OptionsCamper } from '../OptionsCamper/OptionsCamper';
import { VehicleDetails } from '../VehicleDetails/VehicleDetails';

export default function Features() {
  const [features, setFeatures] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function getFeatures() {
      try {
        const responce = await fetchCamperById(params.id);
        setFeatures(responce.features);
      } catch (error) {
        console.error('Error fetching features:', error);
      }
    }
    getFeatures();
  }, [params.id]);
  console.log(features);
  return (
    <div>
      <OptionsCamper />
      <VehicleDetails />
    </div>
  );
}
