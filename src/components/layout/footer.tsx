

import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} @ MehwishFatima .All rights reserved.</p>
        <div className={styles.contactLinks}>
          <a href="mailto:mehwishsheikh0010sheikh@gmail.com" className={styles.contactLink}>
            www.mehwishsheikh0010sheikh@gmail.com
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            GitHub
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

