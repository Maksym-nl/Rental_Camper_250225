import heroImage from '../img/Picture.png';
import { ViewNowBtn } from '../components/ViewNow/ViewNowBtn';
import {
  HeroSection,
  HeroImage,
  ContainerWrapper,
  Title,
  Description,
  Overlay,
} from '../styles/HomePage.styled';
export default function Home() {
  return (
    <HeroSection>
      <Overlay />
      <HeroImage src={heroImage} alt="hero" />
      <ContainerWrapper>
        <Title>Campers of your dreams</Title>
        <Description>You can find everything you want in our catalog</Description>
        <div>
          <ViewNowBtn />
        </div>
      </ContainerWrapper>
    </HeroSection>
  );
}
