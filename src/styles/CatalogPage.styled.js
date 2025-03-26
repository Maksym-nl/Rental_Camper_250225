import styled from 'styled-components';

export const CatalogContainer = styled.div`
  background-color: ${p => p.theme.colors['FFFFFF']};
  display: flex;
`;

export const SearchContainer = styled.div`
  margin-right: 24px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;
export const CamperListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  width: 888px;
  outline: 1px solid red;
`;
