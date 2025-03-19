import styled from 'styled-components';
import MapIcon from '../../img/Map.svg';
export const LocationForm = styled.form`
  width: 360px;
  padding-top: 60px;
  margin-left: 64px;
  background-color: ${p => p.theme.colors['FFFFFF']};
  outline: 1px solid red;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: rgba(16, 24, 40, 0.6);
  padding-bottom: 8px;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 48px;
  padding-right: 218px;
  border: none;
  background-color: ${p => p.theme.colors['F7F7F7']};
  border-radius: 12px;
`;
export const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url(${MapIcon});
  background-repeat: no-repeat;
  background-position: center;
`;
