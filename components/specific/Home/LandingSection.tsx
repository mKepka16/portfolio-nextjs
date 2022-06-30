import Image from 'next/image';
import React from 'react';
import { BigButton } from '../../dummy/BigButton';
import { Navigation } from '../../dummy/Navigation';
import styles from '/styles/Home/Home.LandingSection.module.scss';
import ArrowDown from '/public/double-chevron-down.png';
import Link from 'next/link';

interface Props {}

export const LandingSection: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <header className={styles.header}>
        <h2 className={styles.full_name}>Michał Kępka</h2>
        <h4 className={styles.role}>Fullstack developer</h4>
        <Link href='#contact'>
          <a>
            <BigButton>Contact me</BigButton>
          </a>
        </Link>
      </header>
      <div className={styles.arrow_down}>
        <Image src={ArrowDown} alt='arrow down' />
      </div>
    </div>
  );
};
