import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { ShowMoreBtn } from 'components/ShowMore/ShowMore';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterCampers, getFavorites } from '../../redux/selectors';
import { addToFavorites, removeFavorites } from '../../redux/favoriteSlice';
import HeartIcon from '../../img/heart.svg';
import StarIcon from '../../img/Property 1=Pressed.svg';
import MapIcon from '../../img/Map.svg';
import CamperImage from 'components/CamperImage/CamperImage';
import {
  CamperListItem,
  CamperListItemInfo,
  CamperListItemInfoTitle,
  CamperListItemInfoPrice,
  CamperListRetingLocale,
  StarImg,
  RetingWrapper,
  LocationWrapper,
  LoadMoreContainer,
  // CategoryWrapper,
  ShowMoreContainer,
  FavoriteButton,
} from './CamperList.styled';
import { Categories } from 'components/Categories/Categories';

export const CamperList = () => {
  const campers = useSelector(getFilterCampers);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [camperCount, setCamperCount] = useState(5);

  const handleLoadMore = () => {
    setCamperCount(prev => prev + 5);
  };

  const handleFavoriteClick = camper => {
    const isFavorite = favorites.some(fav => fav.id === camper.id);
    if (isFavorite) {
      dispatch(removeFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper));
    }
  };
  const handleShowMoreClick = id => {
    navigate(`/campers/${id}`);
  };
  return (
    <div>
      <ul>
        {campers.slice(0, camperCount).map(camper => {
          const isFavorite = favorites.some(fav => fav.id === camper.id);
          return (
            <CamperListItem key={camper.id}>
              <div>
                <CamperImage src={camper.gallery[0]?.thumb} alt={camper.name} />
              </div>
              <CamperListItemInfo>
                <CamperListItemInfoTitle>
                  <div>
                    <p>{camper.name}</p>
                  </div>
                  <CamperListItemInfoPrice>
                    <div>
                      <p>€{camper.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <FavoriteButton
                        type="button"
                        onClick={() => handleFavoriteClick(camper)}
                        className={isFavorite ? 'active' : ''}
                      >
                        <img src={HeartIcon} alt="heart" />
                      </FavoriteButton>
                    </div>
                  </CamperListItemInfoPrice>
                </CamperListItemInfoTitle>
                <CamperListRetingLocale>
                  <RetingWrapper>
                    <div>
                      <StarImg src={StarIcon} alt="StarIcon" />
                    </div>
                    <div>
                      <p>{camper.rating}</p>
                    </div>
                    <div>
                      <p>({camper.reviews.length} Reviews)</p>
                    </div>
                  </RetingWrapper>
                  <div>
                    <LocationWrapper>
                      <div>
                        <img src={MapIcon} alt={location} />
                      </div>
                      <div>
                        <p>{camper.location}</p>
                      </div>
                    </LocationWrapper>
                  </div>
                </CamperListRetingLocale>
                <div>
                  <p>
                    {camper.description.length > 60
                      ? camper.description.slice(0, 60) + '...'
                      : camper.description}
                  </p>
                </div>
                <Categories camper={camper} />
                <ShowMoreContainer>
                  <ShowMoreBtn onClick={() => handleShowMoreClick(camper.id)} />
                </ShowMoreContainer>
              </CamperListItemInfo>
            </CamperListItem>
          );
        })}
      </ul>
      {campers.length > camperCount ? (
        <LoadMoreContainer>
          <LoadMoreBtn onClick={handleLoadMore} />
        </LoadMoreContainer>
      ) : (
        <ScrollToTop />
      )}
    </div>
  );
};
