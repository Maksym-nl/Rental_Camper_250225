import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchCamperById } from 'api/api';
import { Link } from 'react-router-dom';
// import { OptionsCamper } from 'components/OptionsCamper/OptionsCamper';
// import { VehicleDetails } from 'components/VehicleDetails/VehicleDetails';

export default function DetailsPage() {
  const [camper, setCamper] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function getCampersItem() {
      try {
        const responce = await fetchCamperById(params.id);
        setCamper(responce);
      } catch (error) {}
    }
    getCampersItem();
  }, [params.id]);
  console.log(camper);
  if (!camper) {
    return <div>Loading...</div>; // Показываем индикатор загрузки
  }
  return (
    <div>
      {/* <CamperList campers={[camper]} /> */}
      <h2>{camper.name}</h2>
      <p>{camper.rating}</p>
      <p>{camper.location}</p>
      <ul>
        {camper.gallery?.map(image => {
          return (
            <li key={image.id}>
              <img src={image.original} alt={camper.name} width={200} />
            </li>
          );
        })}
      </ul>
      <p>{camper.description}</p>
      {/* <OptionsCamper campers={[camper]} /> */}
      {/* <VehicleDetails campers={[camper]} /> */}
      <div>
        <Link to="features">Features</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
}
