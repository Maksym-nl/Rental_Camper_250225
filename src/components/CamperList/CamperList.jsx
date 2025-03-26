import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ShowMoreBtn } from 'components/ShowMore/ShowMore';
import { useSelector } from 'react-redux';
import { getFilterCampers } from '../../redux/selectors';
import HeartIcon from '../../img/heart.svg';
import StarIcon from '../../img/Property 1=Pressed.svg';
import MapIcon from '../../img/Map.svg';
import {
  CamperListContainer,
  CamperItem,
  CamperItemImage,
  CamperImgWrapper,
  CamperItemInfo,
  CamperItemInfoTitle,
  CamperItemInfoPrice,
  CamperListRetingLocale,
  StarImg,
  RetingWrapper,
  LocationWrapper,
} from './CamperList.styled';

// export const CamperList = () => {
//   const campers = useSelector(getFilterCampers);
//   const location = useLocation();
//   console.log(campers.length);
//   return (
//     <CamperListContainer>
//       <ul>
//         {campers.map(camper => {
//           return (
//             <CamperItem key={camper.id}>
//               <CamperImgWrapper>
//                 <CamperItemImage
//                   src={camper.gallery[0].thumb}
//                   alt={camper.name}
//                 />
//               </CamperImgWrapper>
//               <div>
//                 <h3>{camper.name}</h3>
//                 <p>{camper.rating}</p>
//                 <div>
//                 <p>{camper.location}</p>
//                 <p>{camper.description}</p>
//                 <ul>
//                   <li>
//                     <p>Automatic</p>
//                   </li>
//                   <li>
//                     <p>AC</p>
//                   </li>
//                   <li>
//                     <p>Petrol</p>
//                   </li>
//                   <li>
//                     <p>Kitchen</p>
//                   </li>
//                   <li>
//                     <p>Bathroom</p>
//                   </li>
//                 </ul>
//               </div>
//               <Link to={`/campers/${camper.id}`} state={{ from: location }}>
//                 <ShowMoreBtn />
//               </Link>
//             </CamperItem>
//           );
//         })}
//       </ul>
//     </CamperListContainer>
//   );
// };

export const CamperList = () => {
  const campers = useSelector(getFilterCampers);
  console.log(campers);
  const location = useLocation();
  // console.log(campers.length);
  return (
    <div>
      <ul>
        {campers.map(camper => {
          return (
            <CamperItem key={camper.id}>
              <div>
                <CamperItemImage
                  src={camper.gallery[0].thumb}
                  alt={camper.name}
                />
              </div>
              <CamperItemInfo>
                <CamperItemInfoTitle>
                  <li>
                    <p>{camper.name}</p>
                  </li>
                  <CamperItemInfoPrice>
                    <li>
                      <p>${camper.price} </p>
                    </li>
                    <li>
                      <button type="button">
                        <img src={HeartIcon} alt="heart" />
                      </button>
                    </li>
                  </CamperItemInfoPrice>
                </CamperItemInfoTitle>
                <CamperListRetingLocale>
                  <RetingWrapper>
                    <li>
                      <StarImg src={StarIcon} alt="StarIcon" />
                    </li>
                    <li>
                      <p>{camper.rating}</p>
                    </li>
                    <li>
                      <p>({camper.reviews.length} Reviews)</p>
                    </li>
                  </RetingWrapper>
                  <div>
                    <LocationWrapper>
                      <li>
                        <img src={MapIcon} alt={location} />
                      </li>
                      <li>
                        <p>{camper.location}</p>
                      </li>
                    </LocationWrapper>
                  </div>
                </CamperListRetingLocale>
                <p>
                  {camper.description.length > 60
                    ? camper.description.slice(0, 60) + '...'
                    : camper.description}
                </p>
              </CamperItemInfo>
            </CamperItem>
          );
        })}
      </ul>
    </div>
  );
};
