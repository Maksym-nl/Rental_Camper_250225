import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import {
  LocationForm,
  Text,
  Input,
  InputWrapper,
  IconWrapper,
} from './Location.styled';

export const Location = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      toast('Write the city');
      return;
    }
    onsubmit(input);
  };

  const value = useSelector(getFilter);

  return (
    <LocationForm>
      <Text>Location</Text>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <IconWrapper />
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            value={value}
            placeholder="Search City"
            onChange={onChange}
          />
        </InputWrapper>
      </form>
    </LocationForm>
  );
};
