import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contactSection}>
    <h2 className={styles.title}>Contacto</h2>
    <form className={styles.form}>
      <input type="text" className={styles.input} placeholder="Nombre" required />
      <input type="email" className={styles.input} placeholder="Email" required />
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  </section>
);

export default Contact;
