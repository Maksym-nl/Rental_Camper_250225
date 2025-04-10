import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 48px;
  /* outline: 2px solid green; */
`;

export const ReviewsList = styled.ul`
  width: 631px;
  /* outline: 10px solid red; */
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
export const ReviewItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
export const ReviewNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  gap: 4px;
`;
export const ReviewName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const ReviewComment = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${p => p.theme.colors['475467']};
  margin-top: 20px;
`;
