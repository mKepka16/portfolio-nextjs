import Link from 'next/link';
import React from 'react';
import styles from '/styles/dummy/Footer.module.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '../../helpers';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  footer_text: string;
  isHomePage?: boolean;
}

export const Footer: React.FC<Props> = ({ footer_text, isHomePage }) => {
  return (
    <footer className={styles.container}>
      <motion.h3 {...fadeIn} className={styles.main_text}>
        {footer_text}
      </motion.h3>

      <nav>
        {isHomePage ? (
          <>
            <AnchorLink href='#home'>
              <motion.span
                viewport={{ once: true, amount: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.nav_item}>
                  <span className={styles.nav_item_text}>Home</span>
                  <div className={styles.line}></div>
                </div>
              </motion.span>
            </AnchorLink>
            <AnchorLink href='#projects'>
              <motion.span
                viewport={{ once: true, amount: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className={styles.nav_item}>
                  <span className={styles.nav_item_text}>Projects</span>
                  <div className={styles.line}></div>
                </div>
              </motion.span>
            </AnchorLink>
          </>
        ) : (
          <>
            <Link href='/'>
              <motion.a
                viewport={{ once: true, amount: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={styles.nav_item}>
                  <span className={styles.nav_item_text}>Home</span>
                  <div className={styles.line}></div>
                </div>
              </motion.a>
            </Link>
            <Link href='/#projects'>
              <motion.a
                viewport={{ once: true, amount: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className={styles.nav_item}>
                  <span className={styles.nav_item_text}>Projects</span>
                  <div className={styles.line}></div>
                </div>
              </motion.a>
            </Link>
          </>
        )}
        <Link href='/cv'>
          <motion.a
            viewport={{ once: true, amount: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className={styles.nav_item}>
              <span className={styles.nav_item_text}>CV</span>
              <div className={styles.line}></div>
            </div>
          </motion.a>
        </Link>
      </nav>
      <div className={styles.copyright}>
        <small>&copy; Copyright {new Date().getFullYear()}, Michał Kępka</small>
      </div>
    </footer>
  );
};
