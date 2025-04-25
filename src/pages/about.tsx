import Head from "next/head";
import Header from "@/components/Header";
import homeStyles from "@/styles/Home.module.css"; // Reuse footer style
import styles from "@/styles/About.module.css"; // Page specific styles

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Erick Eaton</title>
        <meta name="description" content="About Erick Eaton - Software Engineer" />
      </Head>
      <Header />
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          <section className={styles.bioSection}>
            <h1 className={styles.pageTitle}>About Me</h1>
            <div className={styles.bioContent}>
              {/* Removed ocean/sea air references */}
              <p>
                Hey there! I'm Erick Eaton. I grew up in Nahant, Massachusetts – a small coastal town just north of Boston. 
                My fascination with patterns and problem-solving led me to study Mathematics at UMass Lowell. 
                That's where I really solidified my love for analytical thinking and discovered the power of using computation to find solutions.
              </p>
              <p>
                Nowadays, I channel that energy into software engineering. I genuinely enjoy the challenge of building things, whether it's creating data integrations with Python and AWS, exploring machine learning with TensorFlow for image analysis, or simply finding ways to make processes run more smoothly. 
                My math background gives me a unique lens for breaking down complex problems, and I'm always excited by the chance to learn and apply new technologies to build reliable and effective applications.
              </p>
              <p>
                Outside of work, I love staying active and play soccer regularly. Photography is another big hobby of mine – it's a fantastic way to explore different perspectives and find the beauty in details, which is something I try to bring back to my technical work too.
              </p>
            </div>
          </section>
        </main>
        <footer className={homeStyles.footer}> {/* Reuse footer from Home.module.css */}
          © {new Date().getFullYear()} Erick Eaton. All rights reserved.
        </footer>
      </div>
    </>
  );
} 