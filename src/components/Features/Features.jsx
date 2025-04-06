import { VehicleCamperById } from 'components/VehicleDetails/VehicleDetails';
// import { FeaturesWrapper, FeaturesContent } from './Features.styled';
// import { Categories } from 'components/Categories/Categories';
import { FeaturesCamperById } from 'components/FeaturesCamperById/FeaturesCamperById';
import { LeadForm } from 'components/LeadForm/LeadForm';
// import { FeaturesWrapper, FeaturesContent } from './Features.styled';
import { FeaturesContainer, FeaturesWrapper } from './Features.styled';

const Features = () => {
  return (
    <FeaturesWrapper>
      <FeaturesContainer>
        <FeaturesCamperById />
        <VehicleCamperById />
      </FeaturesContainer>
      {/* <FeaturesContent> */}
      <LeadForm />
      {/* </FeaturesContent> */}
    </FeaturesWrapper>
  );
};

export default Features;
