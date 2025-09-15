import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  { question: '¿NeeucomAI es un software automático o una agencia?', answer: 'NeeucomAI es una agencia de servicios de inteligencia artificial. No eres atendido por un bot: nuestro equipo humano te acompaña en todo el proceso.' },
  { question: '¿Qué sucede después de pagar un plan?', answer: 'El pago inicia el proceso, pero no es automático. Un especialista se pondrá en contacto contigo para conocer tu proyecto.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Preguntas frecuentes</h2>
      <div className={styles.accordion}>
        {faqs.map((faq, i) => (
          <div className={styles.item} key={faq.question}>
            <button
              className={styles.question}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {faq.question}
            </button>
            {open === i && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
