import React, { useMemo } from 'react';
import { InfoBoxT } from '../../strapiTypes/components/common';
import { Card } from './Card';
import styles from '/styles/dummy/Cards.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { fadeIn } from '../../helpers';

interface Props {
  header: string;
  description: string;
  cards: InfoBoxT[];
}

export const Cards: React.FC<Props> = ({ header, description, cards }) => {
  const areCardsWithoutDetails = useMemo(
    () => cards.every((card) => card.details.length === 0),
    [cards]
  );

  return (
    <section
      className={cn(
        styles.container,
        areCardsWithoutDetails && styles.no_details_container
      )}
    >
      <motion.h3 {...fadeIn} className={styles.header}>
        {header}
      </motion.h3>
      <motion.p {...fadeIn} className={styles.description}>
        {description}
      </motion.p>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
