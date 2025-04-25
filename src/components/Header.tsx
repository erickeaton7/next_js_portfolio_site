import React, { useState } from 'react';
import styles from './Header.module.css'; // We'll create this CSS module next
import Link from 'next/link'; // Import Link for consistency

const Header: React.FC = () => {
  // State for mobile menu visibility
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={styles.header}>
      {/* Update logo link - remove legacyBehavior if present */} 
      <div className={styles.logo}><Link href="/">Erick Eaton</Link></div>

      {/* Hamburger Button - Mobile Only */}
      <button 
        className={styles.hamburger} 
        onClick={toggleNav}
        aria-label="Toggle navigation"
        aria-expanded={isNavOpen}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {/* Updated Nav Links */}
      <nav className={`${styles.nav} ${isNavOpen ? styles.navOpen : ''}`}>
        <Link href="/" onClick={() => setIsNavOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsNavOpen(false)}>About</Link>
        <Link href="/projects" onClick={() => setIsNavOpen(false)}>Projects</Link>
        <Link href="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header; 