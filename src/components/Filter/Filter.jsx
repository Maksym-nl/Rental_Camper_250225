import React from 'react';
import { FilterContainer, FilterTitle } from './Filter.styled';
import { VehicleEquipment } from 'components/VehicleEquipment/VehicleEquipment';
import { VehicleType } from 'components/VehicleType/VehicleType';

export const Filter = ({ filters, handleClick }) => {
  return (
    <FilterContainer>
      <FilterTitle>Filter</FilterTitle>
      <VehicleEquipment
        equpment={filters.equpment}
        transmission={filters.transmission}
        handleClick={handleClick}
      />
      <VehicleType form={filters.form} handleClick={handleClick} />
    </FilterContainer>
  );
};
