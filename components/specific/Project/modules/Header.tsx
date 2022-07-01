import React from 'react';
import { HeaderContentT } from '../../../../strapiTypes/components/common';
import styles from '../../../../styles/Project/modules/Project.Header.module.scss';
import { motion } from 'framer-motion';
import { headerFadeIn } from '../../../../helpers';

interface Props {
  content: HeaderContentT;
}

export const Header: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.container}>
      <motion.h3
        {...headerFadeIn}
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: content.header }}
      />
      <motion.h6
        {...headerFadeIn}
        className={styles.subheader}
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
};
