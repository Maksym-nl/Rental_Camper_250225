import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding-top: 18px;
  padding-right: 337px;
  padding-bottom: 18px;
  padding-left: 18px;
  border-radius: 12px;
  background: ${props => props.theme.colors['F7F7F7']};
  border: none;
  transition: all 0.3s ease;

  &:focus {
    /* outline: none; */
    box-shadow: 0 0 0 2px ${props => props.theme.colors['DADDE1']};
    background: ${props => props.theme.colors['FFFFFF']};
  }

  &::placeholder {
    color: ${props => props.theme.colors['6C717B']};
    opacity: 0.5;
  }
`;
