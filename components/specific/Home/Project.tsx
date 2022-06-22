import React from 'react';
import { ProjectT } from '../../../types';
import styles from '/styles/Home/Home.Project.module.scss';
import Image from 'next/image';
import { Button } from '../../dummy/Button';

interface Props {
  project: ProjectT;
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.container}>
      <Image
        src={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          project.mainPhoto.data.attributes.url
        }
        alt={project.mainPhoto.data.attributes.alternativeText}
        width={300}
        height={200}
        layout='fill'
        objectFit='fill'
      />
      <div className={styles.overlay}>
        <h3 className={styles.header}>{project.content.header}</h3>
        <h5 className={styles.subheader}>{project.content.content}</h5>
        <Button>Read more</Button>
      </div>
    </div>
  );
};
