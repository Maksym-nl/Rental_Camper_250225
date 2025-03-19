import React from 'react';
import { FilterContainer, FilterTitle } from './Filter.styled';
import { VehicleEquipment } from 'components/VehicleEquipment/VehicleEquipment';
import { VehicleType } from 'components/VehicleType/VehicleType';

export const Filter = () => {
  return (
    <FilterContainer>
      <FilterTitle>Filter</FilterTitle>
      <VehicleEquipment />
      <VehicleType />
    </FilterContainer>
  );
};
