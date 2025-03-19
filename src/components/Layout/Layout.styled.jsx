import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${props => props.theme.colors['F2F4F7']};
  /* gap: 450px; */
`;
export const Logo = styled.div`
  margin: 0;
  padding-left: 64px;
  font-weight: 800;
  font-size: 32px;
  /* outline: 1px solid red; */
  margin-right: 450px;
  font-weight: 800;
  /* outline: 1px solid red; */
`;
export const Trucks = styled.span`
  color: ${props => props.theme.colors['475467']};
`;

export const Nav = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  /* outline: 1px solid red; */
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.veryDark};
    font-weight: 500;
    font-size: 32px;

    &.active {
      color: ${props => props.theme.colors['D84343']};
    }
  }
`;
