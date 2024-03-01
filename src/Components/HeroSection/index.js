import React from "react";
import styled from "styled-components";
import { Bio } from "./../../Data/constants";
import Typewritter from "typewriter-effect";
import HeroImg from '../../Images/Hero_img.jpg'
import HeroBgAnimation from '../HeroBgAnimation'
import {Tilt} from 'react-tilt'
import StarCanvas from '../Canvas/Stars'
import {motion} from 'framer-motion'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from '../../utils/motion'

const HeroContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 110%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  /* border: 1px solid red; */
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary + 95};
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out !important;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1)
  }
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
  color: white;
`;

      const Image = styled.img`
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 50%;
      max-height: 370px;
      max-width: 370px;
      object-fit: cover;
      object-position: center;
      border: 2px solid ${({theme}) => theme.primary};

      @media screen and (max-width: 768px) {
        max-height: 400px;
        max-width: 400px;
      }

      @media screen and (max-width: 640px) {
        max-height: 280px;
        max-width: 280px;
      }


`

const HeroSection = () => {

  const handleClick=()=>{
    // <a download='' href={RESUME}></a>
    window.open('https://drive.google.com/file/d/1Zdo08qPlBnzd0txahuzbAiicmSHOJzs-/view?usp=sharing',"blank")
    console.log("hello")
}
  return (
    <div id="home">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
        <HeroInnerContainer>
          <HeroLeftContainer>
          <motion.div {...headContainerAnimation}>
            <Title>
              Hii, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewritter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            </motion.div>

            <motion.div {...headContainerAnimation}>
            <SubTitle>{Bio.description}</SubTitle>
            </motion.div>

            <ResumeButton>
              <a
                // href={RESUME}
                download="fp05_269-Saurav_Mallik-Resume.pdf"
                onClick={handleClick}
              >
                Resume
              </a>
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
          <motion.div {...headContainerAnimation}>
            <Tilt>
            <Image src={HeroImg} alt='' />
            </Tilt>
            </motion.div>
          </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
