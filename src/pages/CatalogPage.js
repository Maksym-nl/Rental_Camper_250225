import { CamperList } from 'components/CamperList/CamperList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import {
  CatalogContainer,
  SearchContainer,
  ButtonContainer,
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
        <ButtonContainer>
          <LoadMoreBtn />
        </ButtonContainer>
      </CamperListContainer>
    </CatalogContainer>
  );
}
