import styled from 'styled-components';
export const VehicleWrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 576px) {
    margin-top: 50px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;
export const Line = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${p => p.theme.colors['DADDE1']};
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
`;

export const VehicleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const VehicleItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const VehicleLabel = styled.span`
  font-weight: 500;
  /* color: ${p => p.theme.colors.text}; */
`;

export const VehicleValue = styled.span`
  /* color: ${p => p.theme.colors.text}; */
`;
