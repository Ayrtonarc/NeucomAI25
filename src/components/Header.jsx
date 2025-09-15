import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    {/* <img src="/Logo principal.png" alt="NeeucomAI Logo" className={styles.logo} /> */}
    <h1 className={styles.title}>NeeucomAI</h1>
    <p className={styles.subtitle}>Automatiza la creación de comerciales para tus redes sociales con nuestra plataforma SaaS.</p>
    <div className={styles.videos}>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/PnG5x6wk830"
          title="Video de muestra NeeucomAI 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/Chpv3ZcChow"
          title="Video de muestra NeeucomAI 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </header>
);

export default Header;
