import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 581px; */
  gap: 10px;
  outline: 1px solid red;
  margin: 0;
  padding: 0;
`;
export const CategoryList = styled.ul`
  display: flex;
  align-content: center;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CategoryItem = styled.li`
  background-color: ${props => props.theme.colors['DADDE1']};
  /* outline: 1px solid; */
  border-radius: 100px;
  padding: 8px 12px;
  display: flex;
`;
export const TextWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-content: center;
  align-items: center;
`;
export const CategoryItemImage = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  align-content: center;
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 20px;
`;
