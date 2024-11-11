
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
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          Email
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
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
