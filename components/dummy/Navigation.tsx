import Link from 'next/link';
import React from 'react';
import styles from '/styles/dummy/Navigation.module.scss';

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <nav className={styles.container}>
      <Link href=''>
        <a className={styles.nav_item}>Contact</a>
      </Link>
      <Link href=''>
        <a className={styles.nav_item}>Projects</a>
      </Link>
      <Link href=''>
        <a className={styles.nav_item}>CV</a>
      </Link>
    </nav>
  );
};
