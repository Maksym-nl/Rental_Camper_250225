import React, { useState } from 'react';
import styled from 'styled-components';
import defaultCamper from '../../img/default-camper.jpg';
// Дефолтное фото кемпера
const DEFAULT_CAMPER_IMAGE = defaultCamper;

const Image = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

const CamperImage = ({ src, alt, defaultSrc = DEFAULT_CAMPER_IMAGE }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(defaultSrc);
  };

  return <Image src={imgSrc} alt={alt} onError={handleError} />;
};

export default CamperImage;
