import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${props => props.theme.colors['F2F4F7']};

  @media (max-width: 480px) {
    flex-direction: column;
    display: flex;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    display: flex;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  /* display: flex;
  align-items: center; */
`;

export const Logo = styled.div`
  margin: 0;
  padding-left: 64px;
  font-weight: 800;
  font-size: ${p => p.theme.spacing(8)};
  margin-right: 450px;
  font-weight: 800;

  @media (max-width: 480px) {
    font-weight: 800;
    font-size: ${p => p.theme.spacing(8)};
    font-weight: 800;
    margin-right: 0px;
    padding-left: 0px;
  }
  @media (min-width: 477px) and (max-width: 768px) {
    font-size: ${p => p.theme.spacing(9)};
    font-weight: 800;
    margin-right: 0px;
    padding-left: 0px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    margin-right: 225px;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    margin-right: 225px;
  }
`;

export const Trucks = styled.span`
  color: ${props => props.theme.colors['475467']};
`;

export const Nav = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  @media (max-width: 480px) {
    gap: 4px;
    flex-direction: column;
  }

  li {
    list-style: none;
    @media (max-width: 480px) {
      margin-top: 8px;
    }
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.veryDark};
    font-weight: 500;
    font-size: 32px;
    @media (max-width: 480px) {
      font-size: ${p => p.theme.spacing(6)};
      font-weight: 600;
    }

    &.active {
      color: ${props => props.theme.colors['D84343']};
    }
  }
`;
