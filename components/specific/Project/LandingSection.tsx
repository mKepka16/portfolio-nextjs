import React from 'react';
import { HeaderContentT } from '../../../strapiTypes/components/common';
import { StrapiPhotoT, StrapiResponseT } from '../../../strapiTypes/strapi';
import styles from '../../../styles/Project/Project.LandingSection.module.scss';
import Image from 'next/image';

interface Props {
  bigPhoto: StrapiResponseT<StrapiPhotoT>;
  header: HeaderContentT;
}

export const LandingSection: React.FC<Props> = ({ bigPhoto, header }) => {
  return (
    <div className={styles.container}>
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI_URL + bigPhoto.data.attributes.url}
        alt={bigPhoto.data.attributes.alternativeText}
        width={bigPhoto.data.attributes.width}
        height={bigPhoto.data.attributes.height}
        layout='responsive'
      />
      <header>
        <h2 className={styles.header}>{header.header}</h2>
        <h6 className={styles.subheader}>{header.content}</h6>
      </header>
    </div>
  );
};
