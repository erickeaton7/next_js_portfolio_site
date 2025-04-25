import Head from "next/head";
import Header from "@/components/Header";
import homeStyles from "@/styles/Home.module.css"; // Reuse footer style
import styles from "@/styles/Contact.module.css"; // Page specific styles

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Erick Eaton</title>
        <meta name="description" content="Contact information for Erick Eaton" />
      </Head>
      <Header />
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          <section className={styles.contactSection}>
            <h1 className={styles.pageTitle}>Contact Me</h1>
            <div className={styles.contactInfo}>
              <p>The best way to reach me is via email:</p>
              <a href="mailto:erickeaton7@gmail.com" className={styles.emailLink}>
                erickeaton7@gmail.com
              </a>
              {/* You can add other contact methods like LinkedIn here */}
              <p className={styles.otherContact}>You can also find me on:</p>
              <div className={styles.socialLinks}>
                 <a href="https://linkedin.com/in/erickeaton7" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                   LinkedIn
                 </a>
                 <a href="https://github.com/erickeaton7" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                   GitHub
                 </a>
              </div>
              {/* Optional: Placeholder for a contact form */}
              {/* 
              <h2 className={styles.formTitle}>Or send a message:</h2>
              <form className={styles.contactForm}>
                Form fields go here...
              </form> 
              */}
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