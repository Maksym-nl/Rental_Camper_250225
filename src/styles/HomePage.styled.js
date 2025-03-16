import styled from 'styled-components';

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ContainerWrapper = styled.div`
  /* outline: 1px solid red; */
  position: absolute;
  top: 50%;
  color: ${p => p.theme.colors['FFFFFF']};
  width: 570px;
  margin-left: 64px;
  z-index: 2;
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
`;
export const Description = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 32px;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
