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
  @media (max-width: 576px) {
    padding-left: 32px;
    padding-top: 24px;
    padding-right: 32px;
    padding-bottom: 24px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    padding-left: 32px;
    padding-top: 24px;
    padding-right: 32px;
    padding-bottom: 24px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-left: 32px;
    padding-top: 24px;
    padding-right: 32px;
    padding-bottom: 24px;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    padding-left: 64px;
    padding-top: 48px;
    padding-right: 64px;
    padding-bottom: 48px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.33;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 36px;
    text-align: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 36px;
    text-align: center;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 8px;
  @media (max-width: 576px) {
    justify-content: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
  }
`;
export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
  }
`;
export const RatingStyled = styled.div`
  @media (max-width: 576px) {
    display: flex;
    gap: 8px;
    flex-direction: row;
    font-size: 24px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    display: flex;
    gap: 8px;
    flex-direction: row;
    font-size: 24px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    display: flex;
    gap: 8px;
    flex-direction: row;
    font-size: 24px;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  @media (min-width: 1201px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;
export const LocationStyled = styled.div`
  @media (max-width: 576px) {
    display: flex;
    gap: 8px;
    flex-direction: row;
    font-size: 24px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    display: flex;
    gap: 8px;
    flex-direction: row;
    font-size: 24px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    display: flex;
    gap: 8px;
    flex-direction: row;
    font-size: 24px;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  @media (min-width: 1201px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;
export const PriceContainer = styled.div`
  margin-bottom: 20px;
`;
export const Price = styled.p`
  font-size: 24px;
  line-height: 1.33;
  font-weight: 600;
  @media (max-width: 576px) {
    text-align: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    text-align: center;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    text-align: center;
  }
`;
export const ListImg = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Img = styled.img`
  max-width: 292px;
  max-height: 312px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 576px) {
    max-width: 100%;
    max-height: 100%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const Description = styled.p`
  line-height: 1.5;
  margin-bottom: 24px;
  @media (max-width: 576px) {
    font-size: 18px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 18px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  gap: 40px;
  list-style: none;
  line-height: 1.2;
  font-weight: 600;
  @media (max-width: 576px) {
    justify-content: center;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    justify-content: center;
    font-size: 24px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
    font-size: 24px;
  }
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
  &:focus {
    outline: none; /* Убираем стандартную рамку */
    box-shadow: 0 2px 0 0 ${p => p.theme.colors['D84343']}; /* Подсветка фокусом */
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 2px 0 0 ${p => p.theme.colors['D84343']};
  }
`;

export const CamperItemWrapper = styled.div``;
