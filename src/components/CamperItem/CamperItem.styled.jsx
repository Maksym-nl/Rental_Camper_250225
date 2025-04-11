import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors['FFFFFF']};
  padding-left: 64px;
  padding-top: 48px;
  padding-right: 64px;
  padding-bottom: 48px;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.33;
  font-weight: 600;
`;
export const List = styled.ul`
  display: flex;
  gap: 8px;
`;
export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 20px;
`;
export const PriceContainer = styled.div`
  margin-bottom: 20px;
`;
export const Price = styled.p`
  font-size: 24px;
  line-height: 1.33;
  font-weight: 600;
`;
export const ListImg = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 292px;
  height: 312px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const Description = styled.p`
  line-height: 1.5;
  margin-bottom: 24px;
`;
export const LinkContainer = styled.div`
  display: flex;
  gap: 40px;
  list-style: none;
  line-height: 1.2;
  font-weight: 600;
`;
export const Line = styled.span`
  width: 100%;
  height: 1px;

  background-color: ${p => p.theme.colors['DADDE1']};
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.veryDark};
  padding-bottom: 20px;

  transition: border-color 0.3s ease;

  &.active {
    border-bottom: 5px solid ${p => p.theme.colors['D84343']};
    color: ${p => p.theme.colors['D84343']};
  }
`;

export const CamperItemWrapper = styled.div``;
