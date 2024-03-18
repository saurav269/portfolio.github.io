
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Education from './Components/Education';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

const Body =  styled.div`
background-color: ${({theme}) => theme.bg};
width: 100%;
height:100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
background: linear-gradient(
  38.73deg,
  rgba(204, 0 , 187, 0.15) 0%,
  rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70 , 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
  );
  width : 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <Navbar />
      <Body>
       <HeroSection/>
       <Wrapper>
        <About />
       <Skills />
       <Experience />
       <Education />
       </Wrapper>
       <Projects />
      </Body>
    </ThemeProvider>
  );
}

export default App;
