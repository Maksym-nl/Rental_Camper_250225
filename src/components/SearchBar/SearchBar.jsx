import { Location } from 'components/Location/Location';
import { Filter } from 'components/Filter/Filter';
import { SearchBtn } from 'components/SearchBtn/SearchBtn';
import { useState } from 'react';
import omit from 'lodash.omit';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { toast } from 'react-toastify';
export const SearchBar = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: '',
    form: [],
    transmission: [],
    engine: [],
    equpment: {},
  });
  const handleClick = (value, type) => {
    if (type === 'transmission' || type === 'form' || type === 'engine') {
      if (filters[type].includes(value)) {
        const filteredType = filters[type].filter(item => item !== value);
        setFilters(prevState => ({
          ...prevState,
          [type]: filteredType,
        }));
        return;
      }
      setFilters(prevState => ({
        ...prevState,
        [type]: [...prevState[type], value],
      }));
      return;
    }

    if (type === 'equpment') {
      if (filters.equpment[value]) {
        const newEqipment = omit(filters.equpment, value);
        setFilters(prevState => ({ ...prevState, equpment: newEqipment }));
        return;
      }
      setFilters(prevState => ({
        ...prevState,
        equpment: { ...prevState.equpment, [value]: true },
      }));
    }
    if (type === 'location') {
      setFilters(prevState => ({ ...prevState, location: value }));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      filters.location === '' &&
      filters.form.length === 0 &&
      filters.transmission.length === 0 &&
      filters.engine.length === 0 &&
      Object.values(filters.equpment).length === 0
    ) {
      toast('Select any filter');
      return;
    }
    dispatch(setFilter(filters));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Location location={filters.location} onChange={handleClick} />
      <Filter filters={filters} handleClick={handleClick} />
      <SearchBtn />
    </form>
  );
};
