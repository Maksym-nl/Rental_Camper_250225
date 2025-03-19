import styled from 'styled-components';

export const BtnSearch = styled.button`
  font-size: 16px;
  margin-left: 64px;
  margin-top: 48px;
  background-color: ${p => p.theme.colors['E44848']};
  color: ${p => p.theme.colors['FFFFFF']};
  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(15)};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors['D84343']};
  }
  &:active {
    transform: scale(0.98); // Слегка уменьшает размер кнопки при клике
  }
`;
