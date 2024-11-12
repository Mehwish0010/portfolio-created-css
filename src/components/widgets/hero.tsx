import React from 'react';
import styles from './hero.module.css';
import Pic from "@/components/assets/images/pfchat.webp"
  import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to My Portfolio</h1>
        <div className={styles.introSection}>
      <div className={styles.introText}>
        <h1>{`Hi, I'm  `}<span className='text-orange-500'>Mehwish Fatima </span></h1>
        <p>
         {` A passionate Web Developer specializing in creating interactive,
          efficient, and scalable web applications. With expertise in HTML, CSS, JavaScript, TypeScript, and
          frameworks like React and Next.js, I bring ideas to life on the web. Whether it’s a portfolio, e-commerce
          site, or a dynamic web app, I’m here to help you build an exceptional online experience.`}
        </p>
      </div>
    </div>
        <a href="#projects" className={styles.ctaButton}>View My Work</a>
      </div>
      <div className={styles.heroImage}>
        <Image src={Pic} alt="A representation of my work" />
      </div>
    </section>
  );
};

export default Hero;
