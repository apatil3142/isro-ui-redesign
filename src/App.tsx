import React from 'react';
import './App.css';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import {
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  overflow-y: auto;
`;

const Main = styled.div`
  width: 1366px;
  align-items: center;
  margin: 0px auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Wrapper>
          <Main>
            <Routes>
              <Route path='/' element={<Navigate to="/home" />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/activities' element={<Activities />} />
            </Routes>
          </Main>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
