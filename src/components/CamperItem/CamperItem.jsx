import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { clearCamperDetails } from '../../redux/camperSliceById';
import { fetchCamperById } from '../../redux/operation';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';

export const CamperItem = ({ id }) => {
  const dispatch = useDispatch();
  const { camper, isLoading, error } = useSelector(state => state.camperById);

  useEffect(() => {
    dispatch(fetchCamperById(id));
    return () => {
      dispatch(clearCamperDetails());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>console.error({error.message})</div>;
  }
  if (!camper) {
    return (
      <div>
        No camper found
        <Loader />
      </div>
    );
  }

  return (
    <div>
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

      <div>
        <Link to="features">Features</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
