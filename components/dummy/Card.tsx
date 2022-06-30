import React from 'react';
import styles from '/styles/dummy/Card.module.scss';
import Image from 'next/image';
import { InfoBoxT } from '../../strapiTypes/components/common';

interface Props {
  card: InfoBoxT;
}

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top_part}>
        <Image
          src={
            process.env.NEXT_PUBLIC_STRAPI_URL + card.icon.data.attributes.url
          }
          alt={card.icon.data.attributes.alternativeText}
          width={80}
          height={80}
        />
        <h3 className={styles.header}>{card.main_content.header}</h3>
        <p className={styles.description}>{card.main_content.content}</p>
      </div>
      {card.details.length > 0 && (
        <div className={styles.details}>
          {card.details.map((d) => (
            <div key={d.id} className={styles.detail}>
              <h4 className={styles.detail_header}>{d.header}</h4>
              <p className={styles.detail_content}>{d.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
