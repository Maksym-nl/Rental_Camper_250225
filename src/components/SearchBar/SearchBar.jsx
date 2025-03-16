import { Location } from 'components/Location/Location';
import { Filter } from 'components/Filter/Filter';
import { SearchBtn } from 'components/SearchBtn/SearchBtn';
export const SearchBar = () => {
  return (
    <div>
      {/* <h2>SearchBar</h2> */}
      <Location />
      <Filter />
      <SearchBtn />
    </div>
  );
};
