import React from 'react';
import styles from '/styles/Home/Home.Projects.module.scss';
import { Project } from './Project';
import { HeaderContentT } from '../../../strapiTypes/components/common';
import { ProjectT } from '../../../strapiTypes/project';
import { motion } from 'framer-motion';
import { headerFadeIn } from '../../../helpers';

interface Props {
  headers: HeaderContentT;
  endHeaders: HeaderContentT;
  projects: ProjectT[];
}

export const Projects: React.FC<Props> = ({
  headers,
  endHeaders,
  projects,
}) => {
  return (
    <section className={styles.container}>
      <motion.h2
        {...headerFadeIn}
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: headers.header }}
      ></motion.h2>
      <motion.h4
        {...headerFadeIn}
        className={styles.subheader}
        dangerouslySetInnerHTML={{ __html: headers.content }}
      ></motion.h4>

      {projects.map((p) => (
        <Project key={p.createdAt} project={p} />
      ))}

      <motion.h2
        {...headerFadeIn}
        className={styles.end_header}
        dangerouslySetInnerHTML={{ __html: endHeaders.header }}
      ></motion.h2>
      <motion.h4
        {...headerFadeIn}
        className={styles.end_subheader}
        dangerouslySetInnerHTML={{ __html: endHeaders.content }}
      ></motion.h4>
    </section>
  );
};
