import React from 'react'
import { skills } from '../../Data/constants'
import styled from 'styled-components'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'
import StarCanvas from '../Canvas/Stars'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from '../../utils/motion'


const Skills = () => {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  `;

  const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  
  `;

   const Title = styled.div`
   font-size: 42px;
   font-weight: 600;
   text-align: center;
   margin-top: 20px;
   color: ${({theme}) => theme.text_primary};

    @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
    }
   `;

   const Desc = styled.div`
     font-size: 18px;
     max-width: 600px;
     text-align: center;
     color: ${({theme}) => theme.text_secondary};

     @media (max-width: 768px) {
      font-size: 16px;
      
     }
   `;
     const SkillsContainer = styled.div`
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     margin-top: 30px;
     justify-content: center;
     gap: 30px;
     margin-bottom: 20px;
     
     `;

     const Skill = styled.div`
     width: 100%;
     max-width: 500px;
     height: 300px;
     background-color: ${({theme}) => theme.card};
     border : 0.1px solid #854ce6;
     border-radius: 16px;
     padding: 18px 36px;
     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

     @media (max-width: 768px) {
      max-width: 400px;
      padding: 10px 36px;

     }

     @media (max-width: 500px) {
      max-width: 330px;
      padding: 10px 36px;

     }
     `;

     const SkillTitle = styled.h2`
     font-size: 28px;
     font-weight: 600;
     color: ${({theme}) => theme.text_secondary};
     margin-bottom: 20px;
     text-align: center;
     `;
     const SkillList = styled.div `
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     gap: 12px;
     margin-bottom: 20px;
     `;

     const SkillItem = styled.div`
     display: flex;
     align-items: center;
     gap: 8px;
     justify-content: center;
     font-size: 16px;
     color: ${({theme}) => theme.text_primary+80};
     border-radius: 12px;
     border: 1px solid ${({theme}) => theme.text_primary+80};
     padding: 12px 16px;
     font-weight: 400;

     @media (max-width:768px) {
      font-size: 14px;
      padding: 8px 12px;
     }

     @media (max-width:500px) {
      font-size: 14px;
      padding: 6px 12px;
     }
     `;

     const SkillImage = styled.img`
     width: 24px;
     height: 24px;
     `

      
  return (

    <Container id='skills'>
    <StarCanvas />
      <Wrapper>
        <Title>Skills</Title>
      <Desc>
        Here are some of my skills
      </Desc>
      
      <SkillsContainer>
        {skills.map((item) => (
          <Tilt>
          <Skill>
            <SkillTitle>{item.title}</SkillTitle>
            <SkillList>
              {
                item.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))
              }
            </SkillList>
          </Skill>
          </Tilt>
        ))}
      </SkillsContainer>
      </Wrapper>
      
    </Container>
  )
}

export default Skills
