import React from 'react';
import { HeaderContentT } from '../../../strapiTypes/components/common';
import { StrapiPhotoT, StrapiResponseT } from '../../../strapiTypes/strapi';
import styles from '../../../styles/Project/Project.LandingSection.module.scss';
import Image from 'next/image';
import { Navigation } from '../../dummy/Navigation';
import { motion } from 'framer-motion';
import { headerFadeIn } from '../../../helpers';

interface Props {
  bigPhoto: StrapiResponseT<StrapiPhotoT>;
  header: HeaderContentT;
}

export const LandingSection: React.FC<Props> = ({ bigPhoto, header }) => {
  return (
    <div className={styles.container}>
      <Navigation
        floating={true}
        back={true}
        rightPanel={[
          { label: 'Contact', link: '#contact', isAnchorLink: true },
          { label: 'Projects', link: '/#projects', isAnchorLink: false },
          { label: 'CV', link: '/cv', isAnchorLink: false },
        ]}
      />
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI_URL + bigPhoto.data.attributes.url}
        alt={bigPhoto.data.attributes.alternativeText}
        width={bigPhoto.data.attributes.width}
        height={bigPhoto.data.attributes.height}
        layout='responsive'
      />
      <header>
        <motion.h2 {...headerFadeIn} className={styles.header}>
          {header.header}
        </motion.h2>
        <motion.h6 {...headerFadeIn} className={styles.subheader}>
          {header.content}
        </motion.h6>
      </header>
    </div>
  );
};
