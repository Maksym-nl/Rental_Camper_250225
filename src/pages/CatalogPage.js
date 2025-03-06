// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCampers } from 'api/api';
// import { CamperList } from 'components/CamperList/CamperList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { ShowMoreBtn } from 'components/ShowMore/ShowMore';
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
      <ul>
        {campers.map(camper => {
          return (
            <li key={camper.id}>
              {
                <img
                  src={camper.gallery[0].thumb}
                  alt={camper.name}
                  width={150}
                />
              }
              <h3>{camper.name}</h3>
              <p>{camper.rating}</p>
              <p>{camper.location}</p>
              <p>{camper.description}</p>
              <Link to={`/campers/${camper.id}`}>
                <ShowMoreBtn />
              </Link>
            </li>
          );
        })}
      </ul>
      <LoadMoreBtn />
    </div>
  );
}
