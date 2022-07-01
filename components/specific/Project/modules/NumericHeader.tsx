import React from 'react';
import styles from '../../../../styles/Project/modules/Project.NumericHeader.module.scss';
import { NumericHeaderT } from '../../../../strapiTypes/components/project-pages';
import { motion } from 'framer-motion';

interface Props {
  content: NumericHeaderT;
}

export const NumericHeader: React.FC<Props> = ({ content }) => {
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      viewport={{ once: true, amount: 1 }}
      className={styles.container}
    >
      <h3
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: content.number }}
      />
      <h6
        className={styles.subheader}
        dangerouslySetInnerHTML={{ __html: content.subheader }}
      />
    </motion.div>
  );
};
