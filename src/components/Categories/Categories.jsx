import { useState, useEffect } from 'react';
import acIcon from '../../img/wind.svg';
import transmissionIcon from '../../img/diagram.svg';
import KitchenIcon from '../../img/cup-hot.svg';
import TvIcon from '../../img/tv.svg';
import BathroomIcon from '../../img/ph_shower.svg';
import RadioIcon from '../../img/ui-radios.svg';
import MicrowaveIcon from '../../img/mirov.svg';
import GasIcon from '../../img/gas.svg';
import WaterIcon from '../../img/water.svg';
import {
  CategoryWrapper,
  CategoryList,
  CategoryItem,
  CategoryItemImage,
} from './Categories.styled';

// Список ключей, которые мы хотим отображать
const categoriesCamper = [
  'transmission',
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
  AC: acIcon,
  bathroom: BathroomIcon,
  kitchen: KitchenIcon,
  TV: TvIcon,
  radio: RadioIcon,
  microwave: MicrowaveIcon,
  gas: GasIcon,
  water: WaterIcon,
};

export const Categories = ({ camper }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (camper) {
      // Фильтруем категории, которые есть у конкретного кемпера
      const filteredCategories = categoriesCamper.filter(
        key => camper.hasOwnProperty(key) && camper[key]
      );
      setCategories(filteredCategories);
    }
  }, [camper]);

  if (!camper) {
    return null;
  }

  return (
    <CategoryWrapper>
      <CategoryList>
        {categories.map(category => (
          <CategoryItem key={category}>
            <CategoryItemImage>
              <img src={categoryIcons[category]} alt={category} />
              <p>{category}</p>
            </CategoryItemImage>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryWrapper>
  );
};
