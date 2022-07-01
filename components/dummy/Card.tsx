import React from 'react';
import styles from '/styles/dummy/Card.module.scss';
import Image from 'next/image';
import { InfoBoxT } from '../../strapiTypes/components/common';
import { motion } from 'framer-motion';
import { fadeIn } from '../../helpers';

interface Props {
  card: InfoBoxT;
}

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top_part}>
        <motion.div {...fadeIn}>
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL + card.icon.data.attributes.url
            }
            alt={card.icon.data.attributes.alternativeText}
            width={80}
            height={80}
          />
        </motion.div>
        <motion.h3 {...fadeIn} className={styles.header}>
          {card.main_content.header}
        </motion.h3>
        <motion.p {...fadeIn} className={styles.description}>
          {card.main_content.content}
        </motion.p>
      </div>
      {card.details.length > 0 && (
        <div className={styles.details}>
          {card.details.map((d, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + 0.3 * i }}
              viewport={{ once: true, amount: 1 }}
              key={d.id}
              className={styles.detail}
            >
              <h4 className={styles.detail_header}>{d.header}</h4>
              <p className={styles.detail_content}>{d.content}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
