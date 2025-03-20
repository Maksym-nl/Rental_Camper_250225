import {
  VehicleEquipmentContainer,
  VehicleEquipmentTitle,
  Line,
  VehicleEquipmentList,
  VehicleEquipmentItem,
  VehicleEquipmentItemImage,
  StyledButton,
  BtnText,
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
          <StyledButton type="button">
            <BtnText>
              <VehicleEquipmentItemImage src={acIcon} alt="Ac" />
              <>AC</>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton type="button">
            <BtnText>
              <VehicleEquipmentItemImage
                src={transmissionIcon}
                alt="Transmission"
              />
              <p>Transmission</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton type="button">
            <BtnText>
              <VehicleEquipmentItemImage src={KitchenIcon} alt="Kitchen" />
              <p>Kitchen</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton type="button">
            <BtnText>
              <VehicleEquipmentItemImage src={TvIcon} alt="TV" />
              <p>TV</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton type="button">
            <BtnText>
              <VehicleEquipmentItemImage src={BathroomIcon} alt="Bathroom" />
              <p>Bathroom</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
      </VehicleEquipmentList>
    </VehicleEquipmentContainer>
  );
};
