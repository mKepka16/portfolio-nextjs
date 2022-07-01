import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '/styles/dummy/Navigation.module.scss';
import BackArrow from '/public/back-arrow.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  rightPanel: {
    label: string;
    link: string;
    isAnchorLink: boolean;
  }[];
  back?: boolean;
  floating?: boolean;
}

export const Navigation: React.FC<Props> = ({ rightPanel, back, floating }) => {
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
        {rightPanel.map((button, i) => {
          if (button.isAnchorLink)
            return (
              <AnchorLink key={i} href={button.link}>
                <span className={styles.nav_item}>{button.label}</span>
              </AnchorLink>
            );
          return (
            <Link key={i} href={button.link}>
              <a className={styles.nav_item}>{button.label}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
