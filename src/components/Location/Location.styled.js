import styled from 'styled-components';
import MapIcon from '../../img/Map.svg';

export const LocationForm = styled.div`
  max-width: 360px;
  padding-top: 60px;
  margin-left: 64px;
  background-color: ${p => p.theme.colors['FFFFFF']};

  @media (max-width: 480px) {
    max-width: 100%;
    margin-left: ${p => p.theme.spacing(8)};
    padding-top: ${p => p.theme.spacing(8)};
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(16, 24, 40, 0.6);
  padding-bottom: ${p => p.theme.spacing(2)};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding-top: ${p => p.theme.spacing(4)};
  padding-bottom: ${p => p.theme.spacing(4)};
  padding-left: ${p => p.theme.spacing(12)};
  padding-right: ${p => p.theme.spacing(54)};
  border: none;
  background-color: ${p => p.theme.colors['F7F7F7']};
  border-radius: ${p => p.theme.spacing(3)};
  @media (max-width: 480px) {
    width: 70%;
    padding-top: ${p => p.theme.spacing(4)};
    padding-bottom: ${p => p.theme.spacing(4)};
    padding-left: ${p => p.theme.spacing(12)};
    padding-right: ${p => p.theme.spacing(54)};
    border: none;
    background-color: ${p => p.theme.colors['F7F7F7']};
    border-radius: ${p => p.theme.spacing(3)};
    padding-right: ${p => p.theme.spacing(17)};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: ${p => p.theme.spacing(5)};
  height: ${p => p.theme.spacing(5)};
  background-image: url(${MapIcon});
  background-repeat: no-repeat;
  background-position: center;
`;
