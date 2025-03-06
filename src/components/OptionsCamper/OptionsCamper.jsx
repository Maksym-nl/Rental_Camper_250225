import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCamperById } from 'api/api';
export const OptionsCamper = () => {
  const [options, setOptions] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getOptions() {
      try {
        const responce = await fetchCamperById(id);
        setOptions(responce);
      } catch (error) {}
    }
    id && getOptions();
  }, [id]);

  return (
    <div>
      <ul>
        {options && (
          <li>
            <p>Transmission: {options.transmission}</p>
            <p>AC: {options.AC}</p>
            <p>Engine: {options.engine}</p>
            <p>Kitchen: {options.kitchen ? 'Yes' : 'No'}</p>
            <p>Radio: {options.radio ? 'Yes' : 'No'}</p>
          </li>
        )}
      </ul>
    </div>
  );
};
