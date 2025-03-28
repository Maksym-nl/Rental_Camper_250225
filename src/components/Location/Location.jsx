import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setLocation, setFilter } from '../../redux/filterSlice';
import { getLocation } from '../../redux/selectors';
import {
  LocationForm,
  Text,
  Input,
  InputWrapper,
  IconWrapper,
} from './Location.styled';

export const Location = ({ location, onChange }) => {
  // const [input, setInput] = useState('');
  // const value = useSelector(getLocation);
  // const dispatch = useDispatch();

  // const onChange = e => {
  //   setInput(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (input.trim() === '') {
  //     toast('Write the city');
  //     return;
  //   }

  //   dispatch(setLocation(input));
  // };

  return (
    <LocationForm>
      <Text>Location</Text>
      <div>
        <InputWrapper>
          <IconWrapper />
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            value={location}
            placeholder="Search City"
            onChange={e => onChange(e.target.value, 'location')}
          />
        </InputWrapper>
      </div>
    </LocationForm>
  );
};
