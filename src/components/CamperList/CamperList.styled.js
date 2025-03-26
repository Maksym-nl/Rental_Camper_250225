import styled from 'styled-components';

export const CamperListContainer = styled.div`
  display: flex;
  outline: 1px solid red;
`;
export const CamperItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #dadde1;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 24px;
`;
export const CamperImgWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;
export const CamperItemImage = styled.img`
  width: 292px;
  height: 320px;
  object-fit: cover;
`;
export const CamperItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  width: 524px;

  outline: 1px solid blue;
`;
export const CamperItemInfoTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  display: flex;
  justify-content: space-between;
`;
export const CamperItemInfoPrice = styled.div`
  display: flex;
`;
export const CamperListRetingLocale = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const StarImg = styled.img`
  width: 16px;
  height: 16px;
  color: ${p => p.theme.colors['FFC531']};
`;
export const RetingWrapper = styled.ul`
  display: flex;
`;
export const LocationWrapper = styled.ul`
  display: flex;
`;
