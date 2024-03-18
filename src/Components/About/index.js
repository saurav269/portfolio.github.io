import React from 'react'
import HeroImg from '../../Images/Hero_img.jpg'
import cursorImg from '../../Images/cursorIcon.png'
import serverIcon from '../../Images/serverIcon.png'
import styles from './About.module.css'
import StarCanvas from '../Canvas/Stars'


const About = () => {
  return (
    <section className={styles.container} id='about'>
     
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={HeroImg} alt='' className={styles.aboutImg} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorImg} alt='' />
            <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I am a Frontend Developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt='' />

            <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>I have experience developing fast and optimised and APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorImg} alt='' />
              <div className={styles.aboutItemText}>
              <h3>MERN Developer</h3>
            <p>Passionate MERN stack developer proficient in MongoDB, Express.js, React, and Node.js, crafting dynamic and scalable web applications</p>
              </div>
          </li>
        </ul>
      </div>
    </section>
    
  )
}

export default About
