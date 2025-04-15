import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  VehicleWrapper,
  Line,
  Title,
  VehicleList,
  VehicleItem,
  VehicleLabel,
  VehicleValue,
} from './VehicleDetails.styled';
const VehiclesCamper = ['form', 'length', 'width', 'height', 'tank', 'consumption'];

// Функция для получения отображаемого текста для ключей
const getDisplayKey = key => {
  const keyMap = {
    form: 'Form',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    tank: 'Tank',
    consumption: 'Consumption',
  };
  return keyMap[key] || key;
};

// Функция для форматирования значений
const formatValue = (key, value) => {
  // Проверяем, содержит ли значение уже единицы измерения
  const hasUnit =
    typeof value === 'string' &&
    (value.includes('m') ||
      value.includes('l') ||
      value.includes('L') ||
      value.includes('l/100km') ||
      value.includes('L/100km'));

  if (key === 'form') {
    // Преобразуем первую букву в заглавную
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  if (hasUnit) {
    // Если значение уже содержит единицы измерения, просто заменяем русские на латинские
    let result = value
      .replace('м', 'm')
      .replace('л', 'L')
      .replace('л/100км', 'L/100km')
      .replace('l/100km', 'L/100km')
      .replace('l ', 'L ');

    // Дополнительная проверка для замены 'l' на 'L' в конце строки
    if (result.endsWith('l')) {
      result = result.slice(0, -1) + 'L';
    }

    return result;
  }

  // Если единиц измерения нет, добавляем их
  if (key === 'length' || key === 'width' || key === 'height') {
    return `${value} m`;
  }
  if (key === 'tank') {
    return `${value} L`;
  }
  if (key === 'consumption') {
    return `${value} L / 100km`;
  }

  return value;
};

export const VehicleCamperById = () => {
  const { camper, isLoading, error } = useSelector(state => state.camperById);
  const [vehicleById, setVehicleById] = useState([]);

  useEffect(() => {
    if (camper) {
      // Фильтруем только те категории, которые есть у кемпера
      const filteredVehicleById = VehiclesCamper.filter(key => camper[key]);
      setVehicleById(filteredVehicleById);
    }
  }, [camper]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (!camper) {
    return <p>Нет данных</p>;
  }

  return (
    <VehicleWrapper>
      <Title>Vehicle details</Title>
      <Line></Line>
      <VehicleList>
        {vehicleById.map(key => (
          <VehicleItem key={key}>
            <VehicleLabel>{getDisplayKey(key)}:</VehicleLabel>
            <VehicleValue>{formatValue(key, camper[key])}</VehicleValue>
          </VehicleItem>
        ))}
      </VehicleList>
    </VehicleWrapper>
  );
};
