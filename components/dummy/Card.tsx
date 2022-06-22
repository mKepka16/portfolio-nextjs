import React from 'react';
import styles from '/styles/dummy/Card.module.scss';
import { JobAreaColumnT } from '../../types';
import Image from 'next/image';

interface Props {
  card: JobAreaColumnT;
}

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className={styles.container}>
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI_URL + card.icon.data.attributes.url}
        alt={card.icon.data.attributes.alternativeText}
        width={80}
        height={80}
      />
      <h3 className={styles.header}>{card.main_content.header}</h3>
      <p className={styles.description}>{card.main_content.content}</p>
    </div>
  );
};
