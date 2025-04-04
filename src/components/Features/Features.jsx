import { VehicleCamperById } from 'components/VehicleDetails/VehicleDetails';
import { FeaturesContainer } from './Features.styled';
// import { Categories } from 'components/Categories/Categories';
import { FeaturesCamperById } from 'components/FeaturesCamperById/FeaturesCamperById';
const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesCamperById />
      <VehicleCamperById />
    </FeaturesContainer>
  );
};

export default Features;
