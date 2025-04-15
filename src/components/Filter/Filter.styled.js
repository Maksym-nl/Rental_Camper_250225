import styled from 'styled-components';
export const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 64px;
  flex-direction: column;
  margin-top: 48px;
  width: 360px;
  @media (max-width: 480px) {
    margin-left: ${p => p.theme.spacing(8)};
    margin-top: ${p => p.theme.spacing(6)};
  }
`;
export const FilterTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 24px;
  color: ${p => p.theme.colors['475467']};
`;
