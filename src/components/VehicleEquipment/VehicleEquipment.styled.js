import styled from 'styled-components';

export const VehicleEquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
`;

export const VehicleEquipmentTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 0px;
  margin-bottom: 16px;
`;
export const Line = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${p => p.theme.colors['DADDE1']};
  margin-bottom: 24px;
`;
export const VehicleEquipmentList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const VehicleEquipmentItemImage = styled.img`
  margin-bottom: 12px;
`;
export const VehicleEquipmentItem = styled.li`
  display: flex;
  display: contents;
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
  transition: all 0.3 sease;
  @media (max-width: 480px) {
    width: 33%;
    height: 112px;
    margin: 1%;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: all 0.3 sease;
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
export const BtnText = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
