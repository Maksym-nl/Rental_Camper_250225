import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors['DADDE1']};
  border-radius: 10px;
  width: 588px;
  padding: 44px;
  @media (max-width: 576px) {
    max-width: 100%;
    padding: 12px;
    margin-top: 24px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    max-width: 100%;
    padding: 12px;
    margin-top: 24px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    max-width: 100%;
    padding: 12px;
    margin-top: 24px;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    max-width: 100%;
    padding: 12px;
    margin-top: 24px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
  @media (max-width: 576px) {
    font-size: 16px;
    text-align: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Text = styled.p`
  line-height: 1.5;
  margin-bottom: 8px;
  @media (max-width: 576px) {
    font-size: 16px;
    text-align: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    /* font-size: 16px; */
    text-align: center;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled(Field)`
  max-width: 100%;
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
  @media (max-width: 576px) {
    padding-top: 18px;
    padding-right: 69%;
    padding-bottom: 18px;
    padding-left: 18px;
  }
`;

export const TextArea = styled(Field)`
  width: 100%;
  height: 118px;
  padding: 18px;
  border-radius: 12px;
  background: ${props => props.theme.colors['F7F7F7']};
  border: none;
  resize: none;
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
  @media (max-width: 576px) {
    height: 90px;
    padding: 8px;
  }
`;

export const Button = styled.button`
  align-self: center;
  padding: 16px 60px;
  border-radius: 200px;
  margin-top: 24px;
  background-color: ${p => p.theme.colors['E44848']};
  color: ${p => p.theme.colors['FFFFFF']};
  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(15)};
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

export const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
