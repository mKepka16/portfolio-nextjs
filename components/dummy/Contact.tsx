import React from 'react';
import styles from '/styles/dummy/Contact.module.scss';
import Image from 'next/image';
import { BigButton } from './BigButton';
import ArrowRight from '/public/right-arrow.png';
import { ContactT } from '../../strapiTypes/contact';
import axios from 'axios';
import { GetStaticProps } from 'next';
import qs from 'qs';
import { HomePageT } from '../../strapiTypes/home_page';
import { StrapiResponseT } from '../../strapiTypes/strapi';

interface Props {
  contact: ContactT;
}

export const Contact: React.FC<Props> = ({ contact }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>{contact.content.header}</h2>
      <p className={styles.contact_info}>{contact.content.content}</p>
      <div className={styles.social_media_list}>
        {contact.social_media.map((sc) => (
          <a
            target='_blank'
            href={sc.link}
            key={sc.id}
            className={styles.social_media_container}
            rel='noreferrer'
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL + sc.icon.data.attributes.url
              }
              alt={sc.icon.data.attributes.alternativeText}
              width={35}
              height={35}
            />
            <span className={styles.social_media_text}>{sc.content}</span>

            <div className={styles.right_arrow}>
              <Image
                src={ArrowRight}
                alt='arrow right'
                width={20}
                height={20}
              />
            </div>
          </a>
        ))}
      </div>
      <div className={styles.quick_contact_outer_container}>
        <div className={styles.quick_contact_container}>
          <h2 className={styles.quick_contact_header}>Quick contact</h2>
          <input
            type='text'
            className={styles.input}
            placeholder='Your name...'
          />
          <input
            type='text'
            className={styles.input}
            placeholder='Your email...'
          />
          <textarea className={styles.textarea} placeholder='Message...' />
          <BigButton>Send</BigButton>
        </div>
      </div>
    </section>
  );
};
