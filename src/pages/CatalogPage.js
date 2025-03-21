import { CamperList } from 'components/CamperList/CamperList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import {
  CatalogContainer,
  SearchContainer,
  ButtonContainer,
} from 'styles/CatalogPage.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';

export default function CatalogPage({ children }) {
  return (
    <CatalogContainer>
      {children}

      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <div>
        <CamperList />
        <ButtonContainer>
          <LoadMoreBtn />
        </ButtonContainer>
      </div>
    </CatalogContainer>
  );
}
