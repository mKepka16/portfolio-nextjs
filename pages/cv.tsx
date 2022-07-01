import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/CV/CV.module.scss';
import qs from 'qs';
import { StrapiResponseT } from '../strapiTypes/strapi';
import { strapi } from './_app';
import { CVPageT } from '../strapiTypes/cv';
import Image from 'next/image';
import BackArrow from '/public/back-arrow.png';
import Link from 'next/link';

interface Props {
  cvData: CVPageT;
}

const CVPage: NextPage<Props> = ({ cvData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CV -Michał Kępka</title>
        <meta name='description' content='Michał Kępka CV' />
        <link rel='icon' href='/favicon.ico' />
        <style>{`
          html,
          body {
            overflow: hidden;
          }
        `}</style>
      </Head>
      <Link href='/'>
        <a>
          <div className={styles.back_container}>
            <div className={styles.arrow_wrapper}>
              <Image src={BackArrow} alt='back arrow' />
            </div>
            HOME
          </div>
        </a>
      </Link>
      <iframe
        className={styles.pdf}
        src={
          process.env.NEXT_PUBLIC_STRAPI_URL + cvData.pdf.data.attributes.url
        }
        width='100%'
        height='100%'
      ></iframe>
    </div>
  );
};

export default CVPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const cvData = await fetchCVData();

  return { props: { cvData }, revalidate: 60 };
};

async function fetchCVData(): Promise<CVPageT> {
  const query = qs.stringify({
    populate: '*',
  });
  const res = await strapi.get<StrapiResponseT<CVPageT>>(`/cv?${query}`);
  return res.data.data.attributes;
}
