import { useSelector } from 'react-redux';

import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import acIcon from '../../img/wind.svg';
import transmissionIcon from '../../img/diagram.svg';
import KitchenIcon from '../../img/cup-hot.svg';
import TvIcon from '../../img/tv.svg';
import BathroomIcon from '../../img/ph_shower.svg';
import RadioIcon from '../../img/ui-radios.svg';
import MicrowaveIcon from '../../img/mirov.svg';
import GasIcon from '../../img/gas.svg';
import WaterIcon from '../../img/water.svg';
import EngineIcon from '../../img/fuel-pump.svg';
import {
  CategoryWrapper,
  CategoryList,
  CategoryItem,
  TextWrapper,
  Icon,
} from './FeaturesCamperById.styled';
// Список ключей, которые мы хотим отображать
const categoriesCamper = [
  'transmission',
  'engine',
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'microwave',
  'gas',
  'water',
];

const categoryIcons = {
  transmission: transmissionIcon,
  engine: EngineIcon,
  AC: acIcon,
  bathroom: BathroomIcon,
  kitchen: KitchenIcon,
  TV: TvIcon,
  radio: RadioIcon,
  microwave: MicrowaveIcon,
  gas: GasIcon,
  water: WaterIcon,
};

// Функция для получения отображаемого текста для категории Transmission
const getCategoryTransmission = (category, camper) => {
  if (category === 'transmission' && camper.transmission) {
    return camper.transmission === 'automatic' ? 'Automatic' : 'Manual';
  }
  return category;
};
// Функция для получения отображаемого текста для категории Engine
const getCategoryEngine = (category, camper) => {
  if (category === 'engine' && camper.engine) {
    return camper.engine === 'petrol' ? 'Petrol' : 'Diesel';
  }
  return category;
};

// Функция для получения отображаемого текста для категорий
const getCategoryDisplayText = (category, camper) => {
  if (category === 'transmission') {
    return getCategoryTransmission(category, camper);
  }
  if (category === 'engine') {
    return getCategoryEngine(category, camper);
  }
  return category;
};

export const FeaturesCamperById = () => {
  //   const { id } = useParams(); // Получаем ID кемпера из URL
  const { camper, isLoading, error } = useSelector(state => state.camperById);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (camper) {
      // Фильтруем только те категории, которые есть у кемпера
      const filteredCategories = categoriesCamper.filter(key => camper[key]);
      setCategories(filteredCategories);
    }
  }, [camper]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <p>ERROR:{error.message}</p>
      </div>
    );
  }

  if (!camper) {
    return (
      <div>
        <p>NO DATA</p>
      </div>
    );
  }

  return (
    <CategoryWrapper>
      {' '}
      <CategoryList>
        {categories.map(category => (
          <CategoryItem key={category}>
            <TextWrapper>
              <Icon src={categoryIcons[category]} alt={category} />
              <p>{getCategoryDisplayText(category, camper)}</p>
            </TextWrapper>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryWrapper>
  );
};
