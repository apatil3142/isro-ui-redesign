import { createGlobalStyle } from 'styled-components';
// import MainBG from './assets/mainBg.jpg';
import MainBg from './assets/mainBG.jpg';

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

