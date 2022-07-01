import Image from 'next/image';
import React from 'react';
import { Navigation } from '../../dummy/Navigation';
import styles from '/styles/Gallery/Gallery.LandingSection.module.scss';
import ArrowDown from '/public/double-chevron-down.png';
import { motion } from 'framer-motion';
import { headerFadeIn } from '../../../helpers';

interface Props {
  title: string;
  photosAmount: number;
}

export const LandingSection: React.FC<Props> = ({ title, photosAmount }) => {
  return (
    <div className={styles.container}>
      <Navigation
        back={true}
        rightPanel={[
          { label: 'Home', link: '/', isAnchorLink: false },
          { label: 'Contact', link: '#contact', isAnchorLink: true },
          { label: 'Projects', link: '/#projects', isAnchorLink: false },
          { label: 'CV', link: '/cv', isAnchorLink: false },
        ]}
      />
      <header className={styles.header}>
        <motion.h2 {...headerFadeIn} className={styles.full_name}>
          {title}
        </motion.h2>
        <motion.h4 {...headerFadeIn} className={styles.role}>
          {photosAmount} photos
        </motion.h4>
      </header>
      <div className={styles.arrow_down}>
        <Image src={ArrowDown} alt='arrow down' />
      </div>
    </div>
  );
};
