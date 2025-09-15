import React from 'react';
import styles from './PrivacyNotice.module.css';

const PrivacyNotice = () => (
  <section className={styles.privacySection}>
    <h2 className={styles.title}>Aviso de Privacidad</h2>
    <div className={styles.noticeBox}>
      <p className={styles.summary}>
        En NeeucomAI, tu privacidad es nuestra prioridad. Recopilamos únicamente la información necesaria para brindarte nuestros servicios y mejorar tu experiencia. Tus datos no serán compartidos con terceros, salvo obligación legal.
      </p>
      <ul className={styles.list}>
        <li><strong>Uso de datos:</strong> Solo para contacto, soporte y mejora de nuestros servicios.</li>
        <li><strong>Protección:</strong> Implementamos medidas de seguridad para resguardar tu información.</li>
        <li><strong>Derechos:</strong> Puedes solicitar acceso, rectificación o eliminación de tus datos en cualquier momento.</li>
        <li><strong>Cookies:</strong> Usamos cookies para mejorar la navegación y analizar el uso de la plataforma.</li>
      </ul>
      <div className={styles.fullNotice}>
        <h5>Aviso completo</h5>
        <p><strong>Responsable:</strong> NeeucomAI, contacto@neeucom.ai</p>
        <p><strong>Finalidad:</strong> Los datos personales recabados serán utilizados para proveer los servicios solicitados, contacto, soporte, y envío de información relevante sobre la plataforma.</p>
        <p><strong>Transferencia de datos:</strong> No se transferirán datos personales a terceros sin consentimiento, salvo obligación legal.</p>
        <p><strong>Derechos ARCO:</strong> Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición enviando un correo a contacto@neeucom.ai.</p>
        <p><strong>Modificaciones:</strong> Este aviso puede ser actualizado; cualquier cambio será publicado en esta sección.</p>
        <p><strong>Consentimiento:</strong> Al proporcionar tus datos, aceptas este aviso de privacidad.</p>
      </div>
    </div>
  </section>
);

export default PrivacyNotice;
