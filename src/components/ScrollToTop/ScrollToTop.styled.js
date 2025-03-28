import styled from 'styled-components';

export const ScrollToTopBtn = styled.button`
  display: block;
  margin: 0 auto;
  background-color: ${props => props.theme.colors['FFFFFF']};
  color: ${props => props.theme.colors['veryDark']};
  padding: 16px 32px;
  border: 1px solid ${props => props.theme.colors['DADDE1']};
  border-radius: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 32px;

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors['D84343']};
  }
`;
