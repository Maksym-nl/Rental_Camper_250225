import {
  LocationForm,
  Text,
  Input,
  InputWrapper,
  IconWrapper,
} from './Location.styled';

export const Location = ({ location, onChange }) => {
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
