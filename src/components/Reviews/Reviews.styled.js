import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 48px;
  @media (max-width: 576px) {
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const ReviewsList = styled.ul`
  max-width: 631px;
  /* outline: 10px solid red; */
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (max-width: 576px) {
    gap: 24px;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    margin-right: 48px;
  }
  @media (min-width: 1201px) {
    margin-right: 48px;
  }
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
