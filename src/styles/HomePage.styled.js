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
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  color: ${p => p.theme.colors['FFFFFF']};
  width: 570px;
  margin-left: 64px;
  z-index: 2;
  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0px;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
  @media (max-width: 480px) {
    font-size: ${p => p.theme.spacing(8)};
  }
  @media (min-width: 477px) and (max-width: 768px) {
    font-size: ${p => p.theme.spacing(8)};
  }
`;
export const Description = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 32px;
  @media (max-width: 480px) {
    font-size: ${p => p.theme.spacing(4)};
    font-weight: 500;
  }
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
export const HomePageWrapper = styled.div`
  /* outline: 1px solid red; */
  // ... existing code ...
`;
