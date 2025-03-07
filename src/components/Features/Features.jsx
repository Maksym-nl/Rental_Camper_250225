import { fetchCamperById } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OptionsCamper } from '../OptionsCamper/OptionsCamper';
// import { VehicleDetails } from '../VehicleDetails/VehicleDetails';

export const Features = () => {
  const [features, setFeatures] = useState([]);

  const params = useParams();

  useEffect(() => {
    async function getFeatures() {
      try {
        const response = await fetchCamperById(params.id);
        setFeatures(response.features);
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
      {/* <VehicleDetails/> */}
    </div>
  );
};
