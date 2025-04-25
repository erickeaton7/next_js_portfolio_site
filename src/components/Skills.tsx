import React from 'react';
import styles from './Skills.module.css';

// Skills organized by category based on resume
const skillsData = [
  {
    category: 'Programming Languages',
    items: ['Python', 'R', 'SQL', 'Typescript'],
  },
  {
    category: 'Tools & Technologies',
    items: ['AWS', 'TensorFlow', 'Numpy', 'Pandas', 'Next.js', 'React', 'SOAP', 'REST'],
  },
  {
    category: 'CI/CD & Testing',
    items: ['Linux systems', 'CloudWatch', 'Unit Testing', 'Code Linting', 'Documentation (Confluence, Jira)'], // Added specifics
  },
  {
    category: 'Numerical Methods & Optimization',
    items: ['Linear Algebra', 'Applied Statistics', 'General Linear Models', 'Differential Equations', 'Machine Learning'],
  },
];

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.sectionTitle}>My Skills</h2>
      <div className={styles.categoriesContainer}>
        {skillsData.map((skillCategory) => (
          <div key={skillCategory.category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{skillCategory.category}</h3>
            <ul className={styles.list}>
              {skillCategory.items.map((skill, index) => (
                <li key={index} className={styles.item}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 