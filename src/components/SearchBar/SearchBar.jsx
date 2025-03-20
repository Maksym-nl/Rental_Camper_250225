import { Location } from 'components/Location/Location';
import { Filter } from 'components/Filter/Filter';
import { SearchBtn } from 'components/SearchBtn/SearchBtn';
export const SearchBar = () => {
  return (
    <div>
      <Location />
      <Filter />
      <SearchBtn />
    </div>
  );
};
