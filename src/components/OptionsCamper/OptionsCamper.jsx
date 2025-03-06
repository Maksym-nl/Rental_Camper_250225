import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCamperById } from 'api/api';

export const OptionsCamper = () => {
  const [options, setOptions] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function getOptions() {
      try {
        const responce = await fetchCamperById(params.id);
        setOptions(responce.options);
      } catch (error) {}
    }
    getOptions();
  }, [params.id]);
  return (
    <div>
      <ul>
        {options.map(option => (
          <li key={option.id}>
            <p>Transmission: {option.transmission}</p>
            <p>Ac: {option.ac}</p>
            <p>Engine: {option.engine}</p>
            <p>Kitchen: {option.kitchen}</p>
            <p>Radio: {option.radio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
