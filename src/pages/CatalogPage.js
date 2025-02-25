// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCampers } from 'api/api';
import { CamperList } from 'components/CamperList/CamperList';

export default function CatalogPage() {
  const params = useParams();
  const [campers, setCampers] = useState([]);
  console.log(params);
  useEffect(() => {
    async function getCampers() {
      try {
        const responce = await fetchCampers();
        setCampers(responce.items);
      } catch (error) {}
    }
    getCampers();
  }, []);
  return (
    <div>
      <CamperList campers={campers} />
    </div>
  );
}
