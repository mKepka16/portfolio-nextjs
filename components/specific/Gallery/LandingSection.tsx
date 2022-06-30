import Image from 'next/image';
import React from 'react';
import { BigButton } from '../../dummy/BigButton';
import { Navigation } from '../../dummy/Navigation';
import styles from '/styles/Gallery/Gallery.LandingSection.module.scss';
import ArrowDown from '/public/double-chevron-down.png';

interface Props {
  title: string;
  photosAmount: number;
}

export const LandingSection: React.FC<Props> = ({ title, photosAmount }) => {
  return (
    <div className={styles.container}>
      <Navigation home={true} back={true} />
      <header className={styles.header}>
        <h2 className={styles.full_name}>{title}</h2>
        <h4 className={styles.role}>{photosAmount} photos</h4>
      </header>
      <div className={styles.arrow_down}>
        <Image src={ArrowDown} alt='arrow down' />
      </div>
    </div>
  );
};
