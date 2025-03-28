import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  outline: 1px solid red;
`;
export const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;
export const CategoryItem = styled.li`
  background-color: ${props => props.theme.colors['F2F4F7']};

  border-radius: 100px;
  padding: 8px 12px;
`;
export const CategoryItemImage = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
`;
