import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 24px;
  background-color: ${props => props.theme.colors['FFFFFF']};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
    color: ${props => props.theme.colors['101828']};
  }
`;

export const ReviewItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${props => props.theme.colors['EAECF0']};

  &:last-child {
    border-bottom: none;
  }
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const ReviewerName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${props => props.theme.colors['101828']};
`;

export const ReviewDate = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors['667085']};
  margin: 4px 0 0 0;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.colors['344054']};
  margin: 12px 0 0 0;
`;
