import React, { useMemo } from 'react';
import { InfoBoxT } from '../../strapiTypes/components/common';
import { Card } from './Card';
import styles from '/styles/dummy/Cards.module.scss';
import cn from 'classnames';

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
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
