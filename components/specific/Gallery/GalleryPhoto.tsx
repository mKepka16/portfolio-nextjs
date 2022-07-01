import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import { StrapiPhotoT } from '../../../strapiTypes/strapi';
import styles from '../../../styles/Gallery/Gallery.GalleryPhoto.module.scss';
import { motion, transform } from 'framer-motion';

interface Props {
  photo: StrapiPhotoT;
}

export const GalleryPhoto: React.FC<Props> = ({ photo }) => {
  return (
    <div className={styles.container}>
      <motion.div
        className={cn(styles.line, styles.upper_line)}
        whileInView={{ translateX: '0%' }}
        transition={{
          duration: 1,
        }}
        initial={{ translateX: '-100%' }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        className={cn(styles.line, styles.upper_line)}
        whileInView={{ translateX: '0%' }}
        transition={{
          duration: 1,
        }}
        initial={{ translateX: '100%' }}
        viewport={{ once: true }}
      ></motion.div>

      <motion.div
        className={styles.image_wrapper}
        whileInView={{ opacity: 1 }}
        transition={{
          scale: { duration: 0.5 },
        }}
        initial={{ opacity: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_URL + photo.url}
          alt={photo.alternativeText}
          width={photo.width}
          height={photo.height}
          layout='responsive'
        />
      </motion.div>

      <motion.div
        className={styles.line}
        whileInView={{ translateX: '0%' }}
        transition={{
          duration: 1,
        }}
        initial={{ translateX: '-100%' }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        className={styles.line}
        whileInView={{ translateX: '0%' }}
        transition={{
          duration: 1,
        }}
        initial={{ translateX: '100%' }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};
