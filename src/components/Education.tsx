import React from 'react';
import styles from './Education.module.css';

const educationData = {
  degree: 'Bachelor of Science, Mathematics',
  university: 'University of Massachusetts Lowell',
  concentration: 'Probability and Statistics',
  minor: 'Economics',
  majorGpa: '3.6',
  overallGpa: '3.4',
  courses: [
    'Linear Statistics Modeling and Regression', 
    'Design of Experiments', 
    'Machine Learning', 
    'Mathematical Statistics', 
    'Mathematical Modeling', 
    'Applied Statistics'
  ],
  certificate: 'TensorFlow Developer Certificate (Google)'
};

const Education: React.FC = () => {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Education & Certifications</h2>
      
      <div className={styles.degreeCard}>
        <h3 className={styles.degreeTitle}>{educationData.degree}</h3>
        <p className={styles.university}>{educationData.university}</p>
        <p><strong>Concentration:</strong> {educationData.concentration}</p>
        <p><strong>Minor:</strong> {educationData.minor}</p>
        <p><strong>GPA:</strong> Major {educationData.majorGpa} | Overall {educationData.overallGpa}</p>

        <h4 className={styles.coursesTitle}>Relevant Coursework:</h4>
        <ul className={styles.coursesList}>
          {educationData.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div className={styles.certificateCard}>
         <h3 className={styles.certTitle}>Certificate</h3>
         <p>{educationData.certificate}</p>
      </div>
    </section>
  );
};

export default Education; 