import { CamperList } from 'components/CamperList/CamperList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { CatalogContainer } from 'styles/CatalogPage.styled';
import { SearchBar } from 'components/SearchBar/SearchBar';

export default function CatalogPage({ children }) {
  return (
    <CatalogContainer>
      {children}
      <div>
        <SearchBar />
      </div>
      <div>
        <CamperList />
      </div>
      <div>
        <LoadMoreBtn />
      </div>
    </CatalogContainer>
  );
}
