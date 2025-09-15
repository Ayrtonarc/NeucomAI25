import React from 'react';
import styles from './SaaS.module.css';

const plans = [
  { name: 'Básico', contents: '2X4', reels: '10', infografias: '4X4', avatar: '', personalizacion: 'Limitada', traduccion: '', entrega: 'avance x semana', soporte: '', especiales: '', precio: '$3,000.00' },
  { name: 'Premium', contents: '4X4', reels: '20', infografias: '8X4', avatar: '', personalizacion: 'Alta', traduccion: '', entrega: 'avance x semana', soporte: '', especiales: '', precio: '$5,000.00' },
  { name: 'Proyecto', contents: '-', reels: '-', infografias: '-', avatar: '', personalizacion: 'Total', traduccion: 'Prioritario', entrega: '', soporte: '', especiales: '', precio: '' },
];

const SaaS = () => (
  <section className={styles.saasSection}>
    <h2 className={styles.title}>Planes SaaS</h2>
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Plan</th><th>Contenidos mensuales</th><th>Reels / Shorts</th><th>Infografías</th><th>Avatar personalizado</th><th>Personalización</th><th>Traducción</th><th>Tiempo de entrega</th><th>Soporte</th><th>Proyectos especiales</th><th>Precio (MXN/mes)</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((p) => (
            <tr key={p.name}>
              <td>{p.name}</td><td>{p.contents}</td><td>{p.reels}</td><td>{p.infografias}</td><td>{p.avatar}</td><td>{p.personalizacion}</td><td>{p.traduccion}</td><td>{p.entrega}</td><td>{p.soporte}</td><td>{p.especiales}</td><td>{p.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default SaaS;
