import Head from "next/head";
// Remove Image import if not used directly on this page
// Remove Geist fonts as they are handled in _app.tsx
import styles from "@/styles/Home.module.css";
import Header from '@/components/Header';
import Hero from '@/components/Hero'; // Import Hero
import Skills from '@/components/Skills'; // Import Skills
// import FeaturedProjects from '@/components/FeaturedProjects'; // Remove old import
import Experience from '@/components/Experience'; // Import Experience component
import Education from "@/components/Education"; // Import Education
import Link from 'next/link'; // Import Link for navigation

export default function Home() {
  return (
    <>
      <Head>
        <title>Erickson Eaton - Portfolio</title>
        <meta name="description" content="Erickson Eaton's Software Engineering Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Simplified main container - fonts applied globally */}
      <div className={styles.pageContainer}> 
        <main className={styles.mainContent}>
          <Hero />
          <Skills />
          {/* <FeaturedProjects /> */}
          <Experience />
          <Education />

          {/* Call to Action Section */}
          <section className={styles.ctaSection}>
            <h2>Get in Touch</h2>
            <p>Interested in discussing a potential role or project? Reach out via the contact page.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Get in Touch
              </Link>
              <Link href="/projects" className={styles.ctaButtonPrimary}>
                 View All Projects
              </Link>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Erick Eaton. All rights reserved.
        </footer>
      </div>
    </>
  );
}
