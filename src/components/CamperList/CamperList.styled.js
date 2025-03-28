import styled from 'styled-components';

export const CamperListContainer = styled.div`
  display: flex;
  outline: 1px solid red;
`;
export const CamperListItem = styled.li`
  display: flex;
  width: 888px;
  height: 358px;
  border: 1px solid ${props => props.theme.colors['DADDE1']};
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 32px;
`;
// export const CamperImgWrapper = styled.div`
//   display: flex;
//   /* justify-content: center;
//   align-items: center; */
// `;
export const CamperListItemImage = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;
export const CamperListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  width: 526px;
  gap: 16px;
`;
export const CamperListItemInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  line-height: 1.33;
  font-size: 24px;
`;
export const CamperListItemInfoPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const CamperListRetingLocale = styled.div`
  display: flex;
  column-gap: 6px;
  /* justify-content: space-between; */
  /* margin-bottom: 24px; */
`;
export const StarImg = styled.img`
  width: 16px;
  height: 16px;
  color: ${p => p.theme.colors['FFC531']};
`;
export const RetingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const LdMoreBtn = styled.button`
  font-size: 16px;
  margin-bottom: 48px;
  background-color: ${props => props.theme.colors['FFFFFF']};
  color: ${props => props.theme.colors['veryDark']};
  padding: 16px 32px;
  border: 1px solid ${props => props.theme.colors['DADDE1']};
  border-radius: 200px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors['D84343']};
  }
  &:active {
    transform: scale(0.98); // Слегка уменьшает размер кнопки при клике
  }
`;
export const CategoryWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* margin-top: 24px; */
`;

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    /* transform: scale(1.1); */
  }

  img {
    width: 24px;
    height: 24px;
    transition: filter 0.2s ease-in-out;
  }

  &.active {
    img {
      filter: brightness(0) saturate(100%) invert(32%) sepia(98%)
        saturate(1234%) hue-rotate(328deg) brightness(85%) contrast(101%);
    }
  }
`;
