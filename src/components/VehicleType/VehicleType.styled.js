import styled from 'styled-components';

export const PageContainer = styled.div`
  overflow-x: hidden;

  max-width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const VehicleTypeContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 0;
  flex-direction: column;
  width: 100%;
  /* outline: 1px solid red; */
`;

export const VehicleTypeTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 0px;
  margin-bottom: 16px;
`;

export const Line = styled.span`
  width: 360px;
  height: 1px;
  background-color: ${p => p.theme.colors['DADDE1']};
  margin-bottom: 24px;
  @media (max-width: 480px) {
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors['DADDE1']};
    margin-bottom: 24px;
  }
`;

export const VehicleTypeList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const VehicleTypeItem = styled.li`
  display: flex;
  /* gap: 8px; */
  width: 112px;
  height: 96px;
  border-radius: 12px;
  border: 1px solid #dadde1;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 70%;
    height: auto;
    margin-bottom: 12px; /* по желанию */
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors['D84343']};
  }
  &:active {
    transform: scale(0.98); // Слегка уменьшает размер кнопки при клике
  }
`;

export const VehicleTypeBtn = styled.button``;

export const VehicleTypeItemImage = styled.img`
  margin-bottom: 12px;
`;

export const BtnText = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
