import Image from 'next/image';
import React from 'react';
import { BigButton } from '../../dummy/BigButton';
import { Navigation } from '../../dummy/Navigation';
import styles from '/styles/Home/Home.LandingSection.module.scss';
import ArrowDown from '/public/double-chevron-down.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { headerFadeIn } from '../../../helpers';

interface Props {}

export const LandingSection: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Navigation
        rightPanel={[
          { label: 'Contact', link: '#contact', isAnchorLink: true },
          { label: 'Projects', link: '#projects', isAnchorLink: true },
          { label: 'CV', link: '/cv', isAnchorLink: false },
        ]}
      />
      <header className={styles.header}>
        <motion.h2 {...headerFadeIn} className={styles.full_name}>
          Michał Kępka
        </motion.h2>
        <motion.h4 {...headerFadeIn} className={styles.role}>
          Fullstack developer
        </motion.h4>
        <Link href='#contact'>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
            viewport={{ once: true }}
          >
            <BigButton>Contact me</BigButton>
          </motion.a>
        </Link>
      </header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1.5 }}
        className={styles.arrow_down}
        viewport={{ once: true }}
      >
        <Image src={ArrowDown} alt='arrow down' />
      </motion.div>
    </div>
  );
};
