import {
  VehicleTypeContainer,
  VehicleTypeTitle,
  Line,
  VehicleTypeList,
  VehicleTypeItem,
  VehicleTypeItemImage,
} from './VehicleType.styled';
import vanIcon from '../../img/bi_grid-1x2.svg';
import fullyIntegratedIcon from '../../img/bi_grid.svg';
import alcoveIcon from '../../img/bi_grid-3x3-gap.svg';
export const VehicleType = () => {
  return (
    <VehicleTypeContainer>
      <VehicleTypeTitle>Vehicle type</VehicleTypeTitle>
      <Line />
      <VehicleTypeList>
        <VehicleTypeItem>
          <button type="button">
            <div>
              <VehicleTypeItemImage src={vanIcon} alt="Van" />
              <p>Van</p>
            </div>
          </button>
        </VehicleTypeItem>
        <VehicleTypeItem>
          <button type="button">
            <div>
              <img src={fullyIntegratedIcon} alt="Fully Integrated" />
              <p>Fully Integrated</p>
            </div>
          </button>
        </VehicleTypeItem>
        <VehicleTypeItem>
          <button type="button">
            <div>
              <img src={alcoveIcon} alt="Alcove" />
              <p>Alcove</p>
            </div>
          </button>
        </VehicleTypeItem>
      </VehicleTypeList>
    </VehicleTypeContainer>
  );
};
