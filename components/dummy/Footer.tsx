import React from 'react';
import styles from '/styles/dummy/Footer.module.scss';

interface Props {
  footer_text: string;
}

export const Footer: React.FC<Props> = ({ footer_text }) => {
  return (
    <footer className={styles.container}>
      <h3 className={styles.main_text}>{footer_text}</h3>

      <nav>
        <div className={styles.nav_item}>
          <span className={styles.nav_item_text}>Home</span>
          <div className={styles.line}></div>
        </div>
        <div className={styles.nav_item}>
          <span className={styles.nav_item_text}>Projects</span>
          <div className={styles.line}></div>
        </div>
        <div className={styles.nav_item}>
          <span className={styles.nav_item_text}>CV</span>
          <div className={styles.line}></div>
        </div>
      </nav>
    </footer>
  );
};
