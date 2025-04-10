import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    ${'' /* max-width: 1440px; */}
    ${'' /* margin: 0 auto; */}
    ${'' /* padding: 0; */}
    box-sizing: border-box;
    /* outline: none; */
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors['FFC531']};
    color: ${props => props.theme.colors.veryDark};
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input:focus,
  button:focus {
    outline: none;
  }
`;
