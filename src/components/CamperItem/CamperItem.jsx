import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { clearCamperDetails } from '../../redux/operation';
import { fetchCamperById } from '../../redux/operation';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import StarImg from '../../img/Property 1=Pressed.svg';
import MapIcon from '../../img/Map.svg';
// import DefaultCamper from '../../img/default-img.svg';
import {
  ContainerItems,
  Title,
  List,
  Item,
  ListImg,
  Img,
  Description,
  LinkContainer,
  Line,
  StyledNavLink,
} from './CamperItem.styled';

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
    <ContainerItems>
      <Title>{camper.name}</Title>
      <List>
        <Item>
          <img src={StarImg} alt={StarImg} />
          {camper.rating}({camper.reviews.length} Reviews)
          <img src={MapIcon} alt={MapIcon} />
          {camper.location}
        </Item>
      </List>

      <ListImg>
        {camper.gallery?.map(image => {
          return (
            <li key={image.id}>
              <Img src={image.original} alt={camper.name} />
            </li>
          );
        })}
        {/* <li>
          <Img src={DefaultCamper} alt={camper.name} />
        </li> */}
      </ListImg>
      <Description>{camper.description}</Description>

      <LinkContainer>
        <li>
          <StyledNavLink to="features">Features</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </li>
      </LinkContainer>
      <Line />
      <Outlet />
    </ContainerItems>
  );
};
