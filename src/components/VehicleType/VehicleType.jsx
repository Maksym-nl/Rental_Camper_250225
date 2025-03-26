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
import { StyledButton } from 'components/VehicleEquipment/VehicleEquipment.styled';

export const VehicleType = ({ handleClick, form }) => {
  return (
    <VehicleTypeContainer>
      <VehicleTypeTitle>Vehicle type</VehicleTypeTitle>
      <Line />
      <VehicleTypeList>
        <VehicleTypeItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('panelTruck', 'form')}
            className={form.includes('panelTruck') ? 'select' : ''}
          >
            <BtnText>
              <VehicleTypeItemImage src={vanIcon} alt="Van" />
              <p>Van</p>
            </BtnText>
          </StyledButton>
        </VehicleTypeItem>
        <VehicleTypeItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('fullyIntegrated', 'form')}
            className={form.includes('fullyIntegrated') ? 'select' : ''}
          >
            <BtnText>
              <VehicleTypeItemImage
                src={fullyIntegratedIcon}
                alt="Fully Integrated"
              />
              <p>Fully Integrated</p>
            </BtnText>
          </StyledButton>
        </VehicleTypeItem>
        <VehicleTypeItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('alcove', 'form')}
            className={form.includes('alcove') ? 'select' : ''}
          >
            <BtnText>
              <VehicleTypeItemImage src={alcoveIcon} alt="Alcove" />
              <p>Alcove</p>
            </BtnText>
          </StyledButton>
        </VehicleTypeItem>
      </VehicleTypeList>
    </VehicleTypeContainer>
  );
};
