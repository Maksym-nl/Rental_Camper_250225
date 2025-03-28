import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { ShowMoreBtn } from 'components/ShowMore/ShowMore';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterCampers, getFavorites } from '../../redux/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favoritesSlice';
import HeartIcon from '../../img/heart.svg';
import StarIcon from '../../img/Property 1=Pressed.svg';
import MapIcon from '../../img/Map.svg';
import transmissionIcon from '../../img/diagram.svg';
import {
  CamperListItem,
  CamperListItemImage,
  CamperListItemInfo,
  CamperListItemInfoTitle,
  CamperListItemInfoPrice,
  CamperListRetingLocale,
  StarImg,
  RetingWrapper,
  LocationWrapper,
  LoadMoreContainer,
  CategoryWrapper,
  ShowMoreContainer,
  FavoriteButton,
} from './CamperList.styled';
import { Categories } from 'components/Categories/Categories';

export const CamperList = () => {
  const campers = useSelector(getFilterCampers);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();
  const location = useLocation();
  const [camperCount, setCamperCount] = useState(5);

  const handleLoadMore = () => {
    setCamperCount(prev => prev + 5);
  };

  const handleFavoriteClick = camper => {
    const isFavorite = favorites.some(fav => fav.id === camper.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper));
    }
  };

  return (
    <div>
      <ul>
        {campers.slice(0, camperCount).map(camper => {
          const isFavorite = favorites.some(fav => fav.id === camper.id);
          return (
            <CamperListItem key={camper.id}>
              <div>
                <CamperListItemImage
                  src={camper.gallery[0].thumb}
                  alt={camper.name}
                />
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
                <Categories />
                <ShowMoreContainer>
                  <ShowMoreBtn />
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
