import {
  VehicleTypeContainer,
  VehicleTypeTitle,
  Line,
  VehicleTypeList,
  VehicleTypeItem,
  VehicleTypeItemImage,
  BtnText,
} from './VehicleType.styled';
import vanIcon from '../../img/bi_grid-1x2.svg';
import fullyIntegratedIcon from '../../img/bi_grid.svg';
import alcoveIcon from '../../img/bi_grid-3x3-gap.svg';

export const VehicleType = () => {
  const handleClick = event => {
    console.log(event.target.value);
  };
  return (
    <VehicleTypeContainer>
      <VehicleTypeTitle>Vehicle type</VehicleTypeTitle>
      <Line />
      <VehicleTypeList>
        <VehicleTypeItem>
          <button type="button" onClick={handleClick}>
            <BtnText>
              <VehicleTypeItemImage
                src={vanIcon}
                alt="Van"
                onClick={handleClick}
              />
              <p>Van</p>
            </BtnText>
          </button>
        </VehicleTypeItem>
        <VehicleTypeItem>
          <button type="button" onClick={handleClick}>
            <BtnText>
              <VehicleTypeItemImage
                src={fullyIntegratedIcon}
                alt="Fully Integrated"
              />
              <p>Fully Integrated</p>
            </BtnText>
          </button>
        </VehicleTypeItem>
        <VehicleTypeItem>
          <button type="button" onClick={handleClick}>
            <BtnText>
              <VehicleTypeItemImage src={alcoveIcon} alt="Alcove" />
              <p>Alcove</p>
            </BtnText>
          </button>
        </VehicleTypeItem>
      </VehicleTypeList>
    </VehicleTypeContainer>
  );
};
