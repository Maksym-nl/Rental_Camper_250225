import styled from 'styled-components';

export const CatalogContainer = styled.div`
  background-color: ${p => p.theme.colors['FFFFFF']};
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    flex-direction: column;
  }
  @media (min-width: 1201px) and (max-width: 1439px) {
    flex-direction: column;
  }
`;

export const SearchContainer = styled.div`
  margin-right: 24px;
  @media (max-width: 480px) {
    margin-right: 0;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    margin-right: 0;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    margin-right: 0;
  }
  @media (min-width: 1201px) and (max-width: 1439px) {
    margin-right: 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CamperListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  width: 888px;
  @media (max-width: 480px) {
    max-width: 100%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 100%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    max-width: 100%;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    max-width: 100%;
  }
  @media (min-width: 1201px) and (max-width: 1439px) {
    max-width: 100%;
  }
`;

export const CatalogPageWrapper = styled.div``;
