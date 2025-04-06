import styled from 'styled-components';

export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  margin: 0;
  width: 588px;
  background: ${props => props.theme.colors['F7F7F7']};
  flex-direction: column;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 44px;
  padding-bottom: 44px;
  border-radius: 10px;
  outline: 3px solid green;
`;

// export const FeaturesContent = styled.div`
//   flex: 1;
//   min-width: 300px;
// `;
