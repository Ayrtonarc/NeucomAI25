import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.container}>
      <a className={styles.brand} href="#">
        {/* <img src="/Isotipo principal.png" alt="NeeucomAI" className={styles.logo} /> */}
        <span className={styles.title}>NeeucomAI</span>
      </a>
    </div>
  </nav>
);

export default Navbar;
