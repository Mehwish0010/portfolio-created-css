

import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

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
        <a href="www.linkedin.com/in/mehwish-fatima-816198217" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </a>
          <a href="https://github.com/Mehwish0010" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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

