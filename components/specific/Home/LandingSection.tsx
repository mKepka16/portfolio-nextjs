import Image from 'next/image';
import React from 'react';
import { BigButton } from '../../dummy/BigButton';
import { Navigation } from '../../dummy/Navigation';
import styles from '/styles/Home/Home.LandingSection.module.scss';
import ArrowDown from '/public/double-chevron-down.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { headerFadeIn } from '../../../helpers';
import { StrapiPhotoT } from '../../../strapiTypes/strapi';
import { useMediaQuery } from 'react-responsive';

interface Props {
  backgroundPhoto: StrapiPhotoT;
}

export const LandingSection: React.FC<Props> = ({ backgroundPhoto }) => {
  const is1000px = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <div className={styles.container}>
      <div className={styles.background_photo}>
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_URL + backgroundPhoto.url}
          alt={backgroundPhoto.alternativeText}
          width={is1000px ? 800 : 600}
          height={is1000px ? 800 : 600}
        />
      </div>
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
