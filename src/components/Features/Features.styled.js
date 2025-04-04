import styled from 'styled-components';
// import { Categories } from 'components/Categories/Categories';
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
`;
// export const CategoriesWrapper = styled.div`
//   display: flex;
//   margin: 0;
//   padding: 0;
//   justify-content: flex-start;
//   outline: 2px solid blue;

//   & li {
//     /* background-color: ${props => props.theme.colors['F2F4F7']}; */
//   }
// `;
