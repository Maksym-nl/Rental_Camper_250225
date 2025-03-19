import {
  VehicleEquipmentContainer,
  VehicleEquipmentTitle,
  Line,
  VehicleEquipmentList,
  VehicleEquipmentItem,
  VehicleEquipmentItemImage,
} from './VehicleEquipment.styled';

import acIcon from '../../img/wind.svg';
import transmissionIcon from '../../img/diagram.svg';
import KitchenIcon from '../../img/cup-hot.svg';
import TvIcon from '../../img/tv.svg';
import BathroomIcon from '../../img/ph_shower.svg';

export const VehicleEquipment = () => {
  return (
    <VehicleEquipmentContainer>
      <VehicleEquipmentTitle>Vehicle equipment</VehicleEquipmentTitle>
      <Line />
      <VehicleEquipmentList>
        <VehicleEquipmentItem>
          <button type="button">
            <div>
              <VehicleEquipmentItemImage src={acIcon} alt="Ac" />
              <p>AC</p>
            </div>
          </button>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <button type="button">
            <div>
              <VehicleEquipmentItemImage
                src={transmissionIcon}
                alt="Transmission"
              />
              <p>Transmission</p>
            </div>
          </button>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <button type="button">
            <div>
              <VehicleEquipmentItemImage src={KitchenIcon} alt="Kitchen" />
              <p>Kitchen</p>
            </div>
          </button>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <button type="button">
            <div>
              <VehicleEquipmentItemImage src={TvIcon} alt="TV" />
              <p>TV</p>
            </div>
          </button>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <button type="button">
            <div>
              <VehicleEquipmentItemImage src={BathroomIcon} alt="Bathroom" />
              <p>Bathroom</p>
            </div>
          </button>
        </VehicleEquipmentItem>
      </VehicleEquipmentList>
    </VehicleEquipmentContainer>
  );
};
