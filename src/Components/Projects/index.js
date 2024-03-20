


import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../Data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />

                 {toggle === 'web page' ? (
                   <ToggleButton active onClick={() => setToggle("web page")}>WEB PAGE</ToggleButton>

                 ) : (
                   <ToggleButton onClick={() => setToggle("web page")}>WEB PAGE</ToggleButton>
                )}
                <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects



































// import React, { useState } from 'react'
// import styled from 'styled-components';
// import ProjectCard from '../Cards/ProjectCard';
// import { projects } from './../../Data/constants';

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// position: relative;
// z-index: 1;
// align-items: center;
// `;

// const Wrapper = styled.div`
// max-width: 1100px;
// position: relative;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// width: 100%;
// gap: 12px;

// `;

//  const Title = styled.div`
//  font-size: 42px;
//  font-weight: 600;
//  text-align: center;
//  margin-top: 20px;
//  color: ${({theme}) => theme.text_primary};

//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
//  `;

//  const Desc = styled.div`
//    font-size: 18px;
//    max-width: 600px;
//    text-align: center;
//    color: ${({theme}) => theme.text_secondary};

//    @media (max-width: 768px) {
//     font-size: 16px;
    
//    }
//  `;

//  const ToggleGroup = styled.div`
//  display: flex;
//  border: 1.5px solid ${({theme}) => theme.primary};
//  color: ${({theme}) => theme.primary};
//  font-size: 16px;
//  border-radius: 12px;
//  font-weight: 500;
//  margin: 22px 0;

//  @media (max-width: 768px) {
//     font-size: 12px;
    
//  }
//  `;
//  const ToggleButton = styled.div`
//  padding: 8px 18px;
//  cursor: pointer;
//  border-radius: 6px;
//  ${({active, theme}) => active && 
//  `
//  background-color: ${theme.primary+20};
//  `}
//  &:hover {
//     background-color: ${({theme}) => theme.primary+80};
//  }
//  @media (max-width: 768px) {
//     padding: 6px 8px;
//     border-radius: 4px;
//  }
//  `;

//  const Divider = styled.div`
//  width: 1.5px;
//  background-color: ${({theme}) => theme.primary+80};
//  `;


// const CardContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-wrap: wrap;
// gap: 28px;
// `;

// const Projects = () => {
//     const [toggle, setToggle] = useState("all");

//   return (
//     <Container id='projects'>
//         <Wrapper>
//             <Title>Projects</Title>
//             <Desc>
//                 Here are some of my skills on which I have been working for the past 2 years.
//             </Desc>

//             <ToggleGroup>
//                 {toggle === 'all' ? (
//                     <ToggleButton active value='all' onClick={() => setToggle("all")}>ALL</ToggleButton>
//                 ): (
//                     <ToggleButton value='all' onClick={() => setToggle("all")}>ALL</ToggleButton>
//                 )}
//                 <Divider />
//                 {toggle === 'web page' ? (
//                   <ToggleButton active onClick={() => setToggle("web page")}>WEB PAGE</ToggleButton>

//                 ) : (
//                   <ToggleButton onClick={() => setToggle("web page")}>WEB PAGE</ToggleButton>
//                 )}
//                 <Divider />
//                 {toggle === "web app" ? (
//                   <ToggleButton active onClick={() => setToggle("web app")}>WEB APPS</ToggleButton>

//                 ) : (
//                   <ToggleButton onClick={() => setToggle("web app")}>WEB APPS</ToggleButton>
//                 )}
                
//             </ToggleGroup>
//             <CardContainer>
//               {toggle === 'all' && projects.map((project) => <ProjectCard project />)}
//               {projects.filter((item) => item.category === toggle)
//               .map((project) => (<ProjectCard project={project}/>))}
//             </CardContainer>

//         </Wrapper>
//     </Container>
//   )
// }

// export default Projects
