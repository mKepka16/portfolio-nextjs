import React from 'react';
import styles from '../../../../styles/Project/modules/Project.NumericHeader.module.scss';
import { NumericHeaderT } from '../../../../strapiTypes/components/project-pages';

interface Props {
  content: NumericHeaderT;
}

export const NumericHeader: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.container}>
      <h3
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: content.number }}
      />
      <h6
        className={styles.subheader}
        dangerouslySetInnerHTML={{ __html: content.subheader }}
      />
    </div>
  );
};
