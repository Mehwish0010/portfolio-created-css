import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.intro}>
        <h2>About Me</h2>
        <p>
         {` Hello! I'm Mehwish Fatima, a dedicated web developer with a strong passion for creating dynamic, user-friendly
          web applications. With a background in HTML, CSS, JavaScript, and TypeScript, I have the skills and
          experience needed to bring your ideas to life. Currently working with Next.js and exploring the latest
          advancements in web development to continuously improve my skill set.`}
        </p>
      </div>

      <div className={styles.skillsSection}>
        <h3>My Skills</h3>
        <div className={styles.skillsList}>
          <div className={styles.skill}>
            <span>HTML</span>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <span>CSS</span>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <span>JavaScript</span>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <span>TypeScript</span>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <span>Next.js</span>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className={styles.skill}>
            <span>React</span>
            <div className={styles.progress}>
              <div className={styles.progressFill} style={{ width: '80%' }}></div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
