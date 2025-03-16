import styled from 'styled-components';

export const LdMoreBtn = styled.button`
  font-size: 16px;
  background-color: ${props => props.theme.colors['DADDE1']};
  color: ${props => props.theme.colors['veryDark']};
  padding: 16px 32px;
  border: 1px;
  border-color: ${props => props.theme.colors['DADDE1']};
  border-radius: 200px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.colors['D84343']};
    /* border-color: ${props => props.theme.colors['D84343']}; */
  }
  &:active {
    transform: scale(0.98); // Слегка уменьшает размер кнопки при клике
  }
`;
