import Image from 'next/image';
import React from 'react';
import styles from '../../styles/dummy/GoToBlock.module.scss';
import LongRightArrow from '/public/long-right-arrow.png';
import Link from 'next/link';

interface Props {
  header: string;
  bigText: string;
  link?: string;
  onClick?: () => void;
}

export const GoToBlock: React.FC<Props> = ({
  header,
  bigText,
  link,
  onClick,
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a>
            <div onClick={onClick} className={styles.container}>
              <div>
                <h5 className={styles.header}>{header}</h5>
                <h3 className={styles.big_text}>{bigText}</h3>
              </div>

              <div className={styles.arrow_wrapper}>
                <Image src={LongRightArrow} alt='long right arrow' />
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <div onClick={onClick} className={styles.container}>
          <div>
            <h5 className={styles.header}>{header}</h5>
            <h3 className={styles.big_text}>{bigText}</h3>
          </div>

          <div className={styles.arrow_wrapper}>
            <Image src={LongRightArrow} alt='long right arrow' />
          </div>
        </div>
      )}
    </>
  );
};
