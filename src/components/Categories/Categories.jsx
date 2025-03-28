import { useSelector } from 'react-redux';
import { getFilterCampers } from '../../redux/selectors';
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

export const Categories = () => {
  const campers = useSelector(getFilterCampers);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (campers.length > 0) {
      // Для каждого кампера фильтруем только нужные ключи
      const filteredCategories = categoriesCamper.filter(key =>
        campers.some(camper => camper.hasOwnProperty(key))
      );
      setCategories(filteredCategories);
    }
  }, [campers]);

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
