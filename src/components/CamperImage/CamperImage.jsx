import React, { useState } from 'react';
import styled from 'styled-components';

// Дефолтное фото кемпера
const DEFAULT_CAMPER_IMAGE =
  'https://ftp.goit.study/img/campers-test-task/default-camper.webp';

const Image = styled.img`
  width: 100%;
  height: 100%;
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
