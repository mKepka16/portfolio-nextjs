import React from 'react';
import { HeaderContentT } from '../../../../strapiTypes/components/common';
import styles from '../../../../styles/Project/modules/Project.Header.module.scss';

interface Props {
  content: HeaderContentT;
}

export const Header: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.container}>
      <h3
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: content.header }}
      />
      <h6
        className={styles.subheader}
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
};
