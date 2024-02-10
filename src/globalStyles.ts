import { createGlobalStyle, css } from 'styled-components';
import MainBg from './assets/mainBG.jpg';

export const GlassEffect = css`
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 6px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background-image: url( ${MainBg});
    background-size: cover;
    background-position: center;
    color: #FFF;
    overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px; 
  }

  ::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
  }
`;

export default GlobalStyle;

