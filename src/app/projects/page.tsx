// Projects.tsx
import React from 'react';
import styles from './project.module.css';

const Projects = () => {
  const projectGroups = [
    [
      {
        title: 'Dynamic Resume Creator',
        description: 'A dynamic resume generator built with Next.js and TypeScript.',
        link: 'http://resumebymehwish.vercel.app',
      },
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio showcasing my skills, projects, and experience.',
        link: 'https://your-portfolio-link.com',
      },
    ],
    [
      {
        title: 'E-commerce App',
        description: 'A fully functional e-commerce app of clothing.',
        link: 'http://nextjs-assignment-6xmj.vercel.app',
      },
      {
        title: 'E-commerce-Website',
        description: 'An e-commerce app of ice-cream shop .',
        link: 'https://css-website-alpha.vercel.app',
      },
    ],
  ];

  return (
    <section className={styles.projectsSection}>
      <h2>My Projects</h2>
      <div className={styles.projectsContainer}>
        {projectGroups.map((group, groupIndex) => (
          <div className={styles.projectRow} key={groupIndex}>
            {group.map((project, index) => (
              <div className={styles.projectCard} key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  View Project
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
