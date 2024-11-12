
// Contact.tsx
import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.intro}>
      {`  I’m a passionate web developer specializing in creating dynamic and responsive web applications. 
        Whether you need a portfolio website, an e-commerce platform, or a custom web solution, 
        I’m here to help bring your vision to life.`}
      </p>
      
      <div className={styles.contactLinks}>
        <a href="mailto:www.mehwishsheikh0010sheikh@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          Email
        </a>
        <a href="www.linkedin.com/in/mehwish-fatima-816198217" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          LinkedIn
        </a>
        <a href="https://github.com/Mehwish0010" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          GitHub
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          Twitter
        </a>
      </div>
    </section>
  );
};

export default Contact;
