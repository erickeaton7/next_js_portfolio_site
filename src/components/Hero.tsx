import React from 'react';
import Image from 'next/image'; // Using next/image for potential optimization
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image 
          src="/profile.jpg" // Updated image path
          alt="Picture of Erick Eaton" // Updated alt text
          width={280} // Use updated size from CSS
          height={280} // Use updated size from CSS
          className={styles.profileImage}
          priority // Add priority if it's above the fold
        />
      </div> 
      <div className={styles.content}>
        <h1 className={styles.name}>Erick Eaton</h1>
        <h2 className={styles.title}>Software Engineer</h2>
        <p className={styles.tagline}>
          Expertise in Python, machine learning, and computational problem-solving.
          Experienced in developing high-performance software for data analysis, integration, and optimization.
          Strong background in numerical methods, statistical modeling, and automation, with a track record of building scalable solutions.
          Passionate about applying technology to solve complex technical challenges across various domains.
        </p>
        {/* Add Social Links */}
        <div className={styles.socialLinks}>
          <a href="https://linkedin.com/in/erickeaton7" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            {/* Icon Placeholder (e.g., using text or an icon library later) */}
            LinkedIn
          </a>
          <a href="https://github.com/erickeaton7" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            {/* Icon Placeholder */}
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 