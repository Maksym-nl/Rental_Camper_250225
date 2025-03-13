import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${props => props.theme.colors['E44848']};
  color: ${props => props.theme.colors['FFFFFF']};
  width: 166px;
  height: 56px;
  border: ${props => props.theme.colors['FFFFFF']};
  border-radius: 200px;
  font-size: 20px;
`;
