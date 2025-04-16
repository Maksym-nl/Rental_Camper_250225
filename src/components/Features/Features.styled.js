import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
  @media (max-width: 576px) {
    flex-direction: column;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    flex-direction: column;
  }
  @media (min-width: 1201px) {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  margin: 0;
  width: 588px;
  background: ${props => props.theme.colors['F7F7F7']};
  flex-direction: column;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 44px;
  padding-bottom: 44px;
  border-radius: 10px;
  @media (max-width: 576px) {
    max-width: 100%;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

// export const FeaturesContent = styled.div`
