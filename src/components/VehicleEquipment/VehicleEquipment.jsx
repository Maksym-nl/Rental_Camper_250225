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
import { useState } from 'react';
import omit from 'lodash.omit';

export const VehicleEquipment = ({ equpment, handleClick, transmission }) => {
  // const [eqipment, setEqupment] = useState({ transmission: [] });
  // const handleClick = (value, type) => {
  //   if (type) {
  //     if (eqipment[type].includes(value)) {
  //       const filteredType = eqipment[type].filter(item => item !== value);
  //       setEqupment(prevState => ({
  //         ...prevState,
  //         [type]: filteredType,
  //       }));
  //       return;
  //     }
  //     setEqupment(prevState => ({
  //       ...prevState,
  //       [type]: [...prevState[type], value],
  //     }));
  //     return;
  //   }
  //   if (eqipment[value]) {
  //     const newEqipment = omit(eqipment, value);
  //     setEqupment(newEqipment);
  //     return;
  //   }
  //   setEqupment(prevState => ({ ...prevState, [value]: true }));
  // };
  // console.log(eqipment);
  return (
    <VehicleEquipmentContainer>
      <VehicleEquipmentTitle>Vehicle equipment</VehicleEquipmentTitle>
      <Line />
      <VehicleEquipmentList>
        <VehicleEquipmentItem>
          <StyledButton
            type="button"
            className={equpment['AC'] ? 'select' : ''}
            onClick={() => handleClick('AC', 'equpment')}
          >
            <BtnText>
              <VehicleEquipmentItemImage src={acIcon} alt="Ac" />
              <>AC</>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('automatic', 'transmission')}
            className={transmission.includes('automatic') ? 'select' : ''}
          >
            <BtnText>
              <VehicleEquipmentItemImage
                src={transmissionIcon}
                alt="Transmission"
              />
              <p>Automatic </p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('manual', 'transmission')}
            className={transmission.includes('manual') ? 'select' : ''}
          >
            <BtnText>
              <VehicleEquipmentItemImage
                src={transmissionIcon}
                alt="Transmission"
              />
              <p>Manual</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('kitchen', 'equpment')}
            className={equpment['kitchen'] ? 'select' : ''}
          >
            <BtnText>
              <VehicleEquipmentItemImage src={KitchenIcon} alt="Kitchen" />
              <p>Kitchen</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('TV', 'equpment')}
            className={equpment['TV'] ? 'select' : ''}
          >
            <BtnText>
              <VehicleEquipmentItemImage src={TvIcon} alt="TV" />
              <p>TV</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
        <VehicleEquipmentItem>
          <StyledButton
            type="button"
            onClick={() => handleClick('bathroom', 'equpment')}
            className={equpment['bathroom'] ? 'select' : ''}
          >
            <BtnText>
              <VehicleEquipmentItemImage src={BathroomIcon} alt="bathroom" />
              <p>Bathroom</p>
            </BtnText>
          </StyledButton>
        </VehicleEquipmentItem>
      </VehicleEquipmentList>
    </VehicleEquipmentContainer>
  );
};
