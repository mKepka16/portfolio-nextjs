import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '/styles/dummy/Navigation.module.scss';
import BackArrow from '/public/back-arrow.png';

interface Props {
  home?: boolean;
  back?: boolean;
  floating?: boolean;
}

export const Navigation: React.FC<Props> = ({ home, back, floating }) => {
  const router = useRouter();
  return (
    <nav className={cn(styles.container, floating && styles.floating)}>
      <div className={styles.left_section}>
        {back && (
          <div onClick={() => router.back()} className={styles.nav_item}>
            <div className={styles.arrow_wrapper}>
              <Image src={BackArrow} alt='back arrow' />
            </div>
            <span>Go Back</span>
          </div>
        )}
      </div>
      <div className={styles.right_section}>
        {home && (
          <Link href='/'>
            <a className={styles.nav_item}>Home</a>
          </Link>
        )}
        <Link href='#contact'>
          <a className={styles.nav_item}>Contact</a>
        </Link>
        <Link href='/#projects'>
          <a className={styles.nav_item}>Projects</a>
        </Link>
        <Link href='/cv'>
          <a className={styles.nav_item}>CV</a>
        </Link>
      </div>
    </nav>
  );
};
