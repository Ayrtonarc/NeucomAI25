import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <small className={styles.text}>&copy; {new Date().getFullYear()} NeeucomAI. Todos los derechos reservados.</small>
    </div>
  </footer>
);

export default Footer;
