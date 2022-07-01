import Image from 'next/image';
import React from 'react';
import { ImageWithDescriptionT } from '../../../../strapiTypes/components/project-pages';
import styles from '../../../../styles/Project/modules/Project.ImageWithDescription.module.scss';
import { Button } from '../../../dummy/Button';
import { SmartLink } from '../../../dummy/SmartLink';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../helpers';

interface Props {
  content: ImageWithDescriptionT;
}

export const ImageWithDescription: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className={styles.image_wrapper}
        >
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL +
              content.image.data.attributes.url
            }
            alt={content.image.data.attributes.alternativeText}
            width={content.image.data.attributes.width}
            height={content.image.data.attributes.height}
            layout='intrinsic'
          />
        </motion.div>
      </div>
      <div className={styles.text_panel}>
        <motion.p {...fadeIn} className={styles.description}>
          {content.description}
        </motion.p>
        {content.additional_info && (
          <motion.p {...fadeIn} className={styles.additional_info}>
            {content.additional_info}
          </motion.p>
        )}
        <motion.div {...fadeIn} className={styles.buttons}>
          {content.buttons.map((button) => (
            <SmartLink
              key={button.id}
              isExternal={button.is_external}
              link={button.link}
            >
              <Button>{button.text}</Button>
            </SmartLink>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
