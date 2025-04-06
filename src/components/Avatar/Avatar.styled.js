import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
export const AvatarStyled = styled(Avatar)`
  width: 60px;
  height: 60px;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors['E44848']};
  background-color: ${props => props.theme.colors['F2F4F7']};

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;
