import React from 'react';
import styles from '/styles/Home/Home.Project.module.scss';
import Image from 'next/image';
import { Button } from '../../dummy/Button';
import Link from 'next/link';
import { ProjectT } from '../../../strapiTypes/project';

interface Props {
  project: ProjectT;
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.container}>
      <Image
        src={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          project.main_photo.data.attributes.url
        }
        alt={project.main_photo.data.attributes.alternativeText}
        width={300}
        height={200}
        layout='fill'
        objectFit='fill'
      />
      <div className={styles.overlay}>
        <h3 className={styles.header}>{project.content.header}</h3>
        <h5 className={styles.subheader}>{project.content.content}</h5>
        <Link href={`/project/${project.project_page.data?.id}`}>
          <a>
            <Button>Read more</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
