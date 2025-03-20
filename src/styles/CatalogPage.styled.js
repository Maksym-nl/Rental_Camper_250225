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
