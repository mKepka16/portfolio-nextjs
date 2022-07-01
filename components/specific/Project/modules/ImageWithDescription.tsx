import Image from 'next/image';
import React from 'react';
import { ImageWithDescriptionT } from '../../../../strapiTypes/components/project-pages';
import styles from '../../../../styles/Project/modules/Project.ImageWithDescription.module.scss';
import { Button } from '../../../dummy/Button';
import { SmartLink } from '../../../dummy/SmartLink';

interface Props {
  content: ImageWithDescriptionT;
}

export const ImageWithDescription: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.image_wrapper}>
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
        </div>
      </div>
      <div className={styles.text_panel}>
        <p className={styles.description}>{content.description}</p>
        {content.additional_info && (
          <p className={styles.additional_info}>{content.additional_info}</p>
        )}
        <div className={styles.buttons}>
          {content.buttons.map((button) => (
            <SmartLink
              key={button.id}
              isExternal={button.is_external}
              link={button.link}
            >
              <Button>{button.text}</Button>
            </SmartLink>
          ))}
        </div>
      </div>
    </div>
  );
};
