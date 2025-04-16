import styled from 'styled-components';

export const VehicleTypeContainer = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 0;
  flex-direction: column;
  width: 100%;
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
  }
`;
export const VehicleTypeList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 480px) {
    gap: 18px;
    flex-direction: row;
  }
`;
export const VehicleTypeItem = styled.li`
  display: contents;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
`;
export const StyledButton = styled.button`
  width: 112px;
  height: 96px;
  border: 1px solid #dadde1;
  border-radius: 12px;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 480px) {
    /* width: 100%;
    height: 96px; */
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: all 0.3 ease;
  }
  &:hover {
    border: 1px solid ${props => props.theme.colors['D84343']};
  }

  &:active {
    transform: scale(0.98);
  }
  &.select {
    border: 1px solid ${props => props.theme.colors['D84343']};
  }
`;
export const VehicleTypeItemImage = styled.img`
  margin-bottom: 12px;
`;
export const BtnText = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
