import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import { StrapiPhotoT } from '../../../strapiTypes/strapi';
import styles from '../../../styles/Gallery/Gallery.GalleryPhoto.module.scss';

interface Props {
  photo: StrapiPhotoT;
}

export const GalleryPhoto: React.FC<Props> = ({ photo }) => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.line, styles.upper_line)}></div>
      <div className={cn(styles.line, styles.upper_line)}></div>

      <div className={styles.image_wrapper}>
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_URL + photo.url}
          alt={photo.alternativeText}
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};
