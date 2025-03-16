import { CamperList } from 'components/CamperList/CamperList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

import { SearchBar } from 'components/SearchBar/SearchBar';

export default function CatalogPage({ children }) {
  return (
    <div>
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
    </div>
  );
}
