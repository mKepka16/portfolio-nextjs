import React from 'react';
import { JobAreaColumnT } from '../../types';
import { Card } from './Card';
import styles from '/styles/dummy/Cards.module.scss';

interface Props {
  header: string;
  description: string;
  cards: JobAreaColumnT[];
}

export const Cards: React.FC<Props> = ({ header, description, cards }) => {
  return (
    <section className={styles.container}>
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
