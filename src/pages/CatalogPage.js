import { CamperList } from 'components/CamperList/CamperList';

import {
  CatalogContainer,
  SearchContainer,
  CamperListContainer,
} from 'styles/CatalogPage.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';

export default function CatalogPage({ children }) {
  return (
    <CatalogContainer>
      {children}

      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <CamperListContainer>
        <CamperList />
      </CamperListContainer>
    </CatalogContainer>
  );
}
