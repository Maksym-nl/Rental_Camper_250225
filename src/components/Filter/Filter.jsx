import React from 'react';

import { VehicleEquipment } from 'components/VehicleEquipment/VehicleEquipment';
import { VehicleType } from 'components/VehicleType/VehicleType';

export const Filter = () => {
  return (
    <div>
      <h3>Filter</h3>
      <VehicleEquipment />
      <VehicleType />
    </div>
  );
};
