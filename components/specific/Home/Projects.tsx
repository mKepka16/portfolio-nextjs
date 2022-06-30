import React from 'react';
import styles from '/styles/Home/Home.Projects.module.scss';
import { Project } from './Project';
import { HeaderContentT } from '../../../strapiTypes/components/common';
import { ProjectT } from '../../../strapiTypes/project';

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
      <h2
        className={styles.header}
        dangerouslySetInnerHTML={{ __html: headers.header }}
      ></h2>
      <h4
        className={styles.subheader}
        dangerouslySetInnerHTML={{ __html: headers.content }}
      ></h4>

      {projects.map((p) => (
        <Project key={p.createdAt} project={p} />
      ))}

      <h2
        className={styles.end_header}
        dangerouslySetInnerHTML={{ __html: endHeaders.header }}
      ></h2>
      <h4
        className={styles.end_subheader}
        dangerouslySetInnerHTML={{ __html: endHeaders.content }}
      ></h4>
    </section>
  );
};
