import React from 'react';
import styles from './Experience.module.css'; // Use new CSS module
import { ExperienceItem } from '@/types'; // Import the ExperienceItem type

// Professional experience data from resume
const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: 'Endicott College',
    location: 'Beverly, MA',
    title: 'Programmer Analyst',
    dates: '2023 - Present',
    descriptionPoints: [
      'Built 10+ integrations from scratch using Python 3.11, MySQL, S3, and Lambda functions.',
      'Developed automated solutions to optimize data workflows.',
      'Documented all integrations in Confluence and tracked tasks using Jira to maintain efficient workflow.',
      'Worked with legacy code including Perl, enhancing functionality while maintaining system stability.',
    ],
    technologies: ['Python', 'MySQL', 'AWS S3', 'AWS Lambda', 'Perl', 'Jira', 'Confluence'],
  },
  {
    id: 2,
    company: 'EvenKeel Performance Insoles',
    location: 'Brookline, MA',
    title: 'Software Engineer',
    dates: '2018 - 2022',
    descriptionPoints: [
      'Developed a machine learning program using TensorFlow to create custom insoles from images.',
      'Applied Convolutional Neural Networks for image analysis, utilizing libraries like Numpy and Pandas for data organization.',
      'Created an automated invoicing system using Node.js, Firebase, and Google Cloud Functions.',
      'Conducted testing on web applications, analyzed results, and provided feedback to the development team.',
    ],
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Node.js', 'Firebase', 'Google Cloud'],
  },
  {
    id: 3,
    company: 'Shift4',
    location: 'Remote',
    title: 'Software Engineer II (Payments Development)',
    dates: '2021 - 2022',
    descriptionPoints: [
      'Performed software testing on Linux systems for secure credit card processing.',
      'Maintained and enhanced Python and PostgreSQL code, contributing to overall system reliability.',
    ],
    technologies: ['Python', 'PostgreSQL', 'Linux'],
  },
];

const Experience: React.FC = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experienceData.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <span className={styles.itemCompany}>{item.company} - {item.location}</span>
              <span className={styles.itemDates}>{item.dates}</span>
            </div>
            <ul className={styles.descriptionList}>
              {item.descriptionPoints.map((point, index) => (
                <li key={index} className={styles.descriptionPoint}>{point}</li>
              ))}
            </ul>
            {item.technologies && item.technologies.length > 0 && (
              <div className={styles.tags}>
                {item.technologies.map((tech, index) => (
                  <span key={index} className={styles.tag}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 