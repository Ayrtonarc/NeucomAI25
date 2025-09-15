import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: 'Ana Torres', text: 'NeeucomAI revolucionó la forma en que creamos contenido. ¡Resultados increíbles y rápidos!' },
  { name: 'Luis García', text: 'La personalización y el soporte son de primer nivel. Recomiendo totalmente la plataforma.' },
];

const Testimonials = () => (
  <section className={styles.testimonialsSection}>
    <h2 className={styles.title}>Testimonios</h2>
    <div className={styles.grid}>
      {testimonials.map((t) => (
        <div className={styles.card} key={t.name}>
          <h5 className={styles.cardTitle}>{t.name}</h5>
          <p className={styles.cardText}>{t.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
