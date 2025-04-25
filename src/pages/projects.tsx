import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import homeStyles from "@/styles/Home.module.css"; // Reuse footer style
import styles from "@/styles/Projects.module.css"; // Page specific styles
import { Project } from "@/types"; // Import the Project type

// Updated projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: 'MNIST Digit Recognition',
    description: 'Developed and trained a Convolutional Neural Network (CNN) using TensorFlow/Keras to classify handwritten digits from the MNIST dataset. Achieved high accuracy through model optimization.',
    imageUrl: '/portfolio1.png',
    repoUrl: 'https://github.com/erickeaton7/MNIST-handwritten-digits-with-keras',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Machine Learning', 'NumPy'],
  },
  {
    id: 2,
    title: 'Covid-19 Regression Analysis in R',
    description: 'Performed regression analysis on COVID-19 data using R to model trends and relationships. Explored statistical models and visualized findings.',
    imageUrl: '/portfolio2.png',
    repoUrl: 'https://github.com/erickeaton7/Covid-19-Regression-Analysis-in-R',
    tags: ['R', 'Regression Analysis', 'Statistics', 'Data Visualization', 'Data Analysis'],
  },
  {
    id: 3,
    title: 'An Exploration of General Linear Models',
    description: 'Final undergraduate thesis exploring the theory and application of General Linear Models (GLMs). Applied concepts from linear algebra and statistics to analyze model properties and usage.',
    imageUrl: '/portfolio3.png',
    repoUrl: 'https://github.com/erickeaton7/An-Exploration-of-General-Linear-Models',
    tags: ['Linear Algebra', 'Statistics', 'General Linear Models', 'R', 'Mathematical Modeling'],
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description: 'This website! Built using Next.js, React, TypeScript, and CSS Modules to showcase my skills, experience, and projects.',
    imageUrl: '/portfolio4.png',
    repoUrl: 'https://github.com/erickeaton7/next_js_portfolio_site',
    tags: ['Next.js', 'React', 'TypeScript', 'CSS Modules'],
  },
  // Removed projects 5 and 6
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Erick Eaton</title>
        <meta name="description" content="Showcase of projects by Erick Eaton" />
      </Head>
      <Header />
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          <section className={styles.projectsSection}>
            <h1 className={styles.pageTitle}>My Projects</h1>
            <div className={styles.grid}>
              {projectsData.map((project) => (
                <div key={project.id} className={styles.card}>
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      width={400} 
                      height={250} 
                      className={styles.image}
                    />
                  )}
                  <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.tags}>
                      {project.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.links}>
                      {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>View Project</a>}
                      {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>View Code</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <footer className={homeStyles.footer}>
          © {new Date().getFullYear()} Erick Eaton. All rights reserved.
        </footer>
      </div>
    </>
  );
} 