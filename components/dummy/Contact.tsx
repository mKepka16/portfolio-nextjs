import React, { useState } from 'react';
import styles from '/styles/dummy/Contact.module.scss';
import Image from 'next/image';
import { BigButton } from './BigButton';
import ArrowRight from '/public/right-arrow.png';
import { ContactT } from '../../strapiTypes/contact';
import { QuickContactData } from '../../pages/api/quick-contact';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
  contact: ContactT;
}

const QuickContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is to short')
    .max(50, 'Name is to long')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string()
    .min(10, '10 characters at least!')
    .max(800, 'To many words. 800 is max')
    .required('Hey, write me something!'),
});

export const Contact: React.FC<Props> = ({ contact }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className={styles.container} id='contact'>
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
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={QuickContactSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              await sendQuickContactEmail({
                senderEmail: values.email,
                senderMessage: values.message,
                senderName: values.name,
              });

              setSubmitting(false);
              setIsSuccess(true);
              resetForm();
              setTimeout(() => setIsSuccess(false), 6000);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Field
                  name='name'
                  type='text'
                  className={styles.input}
                  placeholder='Your name...'
                />
                {touched.name && errors.name && (
                  <div className={styles.error_message}>{errors.name}</div>
                )}
                <Field
                  name='email'
                  type='email'
                  className={styles.input}
                  placeholder='Your email...'
                />
                {touched.email && errors.email && (
                  <div className={styles.error_message}>{errors.email}</div>
                )}
                <Field
                  as='textarea'
                  name='message'
                  className={styles.textarea}
                  placeholder='Message...'
                />
                {touched.message && errors.message && (
                  <div className={styles.error_message}>{errors.message}</div>
                )}
                {isSuccess && (
                  <div className={styles.success_message}>Email sent!</div>
                )}
                <BigButton type='submit' disabled={isSubmitting}>
                  Send
                </BigButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

async function sendQuickContactEmail(quickContactData: QuickContactData) {
  await axios.post('/api/quick-contact', quickContactData);
}
