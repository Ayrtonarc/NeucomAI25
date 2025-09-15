import React from 'react';
import styles from './Features.module.css';

const features = [
  { title: 'IA avanzada', desc: 'Genera comerciales únicos con inteligencia artificial.' },
  { title: 'Rápido y eficiente', desc: 'Automatiza procesos y ahorra tiempo en producción.' },
  { title: 'Personalización total', desc: 'Adapta tus videos y campañas a tu marca.' },
];

const Features = () => (
  <section className={styles.featuresSection}>
    <div className={styles.featuresGrid}>
      {features.map((f) => (
        <div className={styles.card} key={f.title}>
          <h5 className={styles.cardTitle}>{f.title}</h5>
          <p className={styles.cardText}>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
