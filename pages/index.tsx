import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Cards } from '../components/dummy/Cards';
import { LandingSection } from '../components/specific/Home/LandingSection';
import styles from '../styles/Home/Home.module.scss';
import qs from 'qs';
import { Projects } from '../components/specific/Home/Projects';
import { Contact } from '../components/dummy/Contact';
import { Footer } from '../components/dummy/Footer';
import { HomePageT } from '../strapiTypes/home_page';
import { StrapiResponseT } from '../strapiTypes/strapi';
import { ContactT } from '../strapiTypes/contact';
import { fetchContactData } from '../helpers';
import { strapi } from './_app';

interface Props {
  homeData: HomePageT;
  contactData: ContactT;
}

const Home: NextPage<Props> = ({ homeData, contactData }) => {
  return (
    <div className={styles.container} id='home'>
      <Head>
        <title>Michał Kępka</title>
        <meta name='description' content='Michał Kępka Porfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingSection
        backgroundPhoto={homeData.background_photo.data.attributes}
      />
      <main>
        <Cards
          header={homeData.bio.header}
          description={homeData.bio.content}
          cards={[
            homeData.job_area_left_column,
            homeData.job_area_middle_column,
            homeData.job_area_right_column,
          ]}
        />
        <div className={styles.line} id='projects'></div>
        <Projects
          headers={homeData.works_content}
          endHeaders={homeData.after_works_content}
          projects={homeData.projects.data.map((p) => p.attributes)}
        />
      </main>
      <Contact contact={contactData} />
      <Footer footer_text={contactData.footer_text} isHomePage={true} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const homeData = await fetchHomeData();
  const contactData = await fetchContactData();

  return { props: { homeData, contactData }, revalidate: 10 };
};

async function fetchHomeData(): Promise<HomePageT> {
  const query = qs.stringify(
    {
      populate: {
        background_photo: {
          populate: '*',
        },
        job_area_left_column: {
          populate: '*',
        },
        job_area_middle_column: {
          populate: '*',
        },
        job_area_right_column: {
          populate: '*',
        },
        bio: {
          populate: '*',
        },
        works_content: {
          populate: '*',
        },
        after_works_content: {
          populate: '*',
        },
        projects: {
          populate: '*',
        },
        contact: {
          populate: ['content', 'social_media', 'social_media.icon'],
        },
        footer_text: {
          populate: '*',
        },
      },
    },
    { encodeValuesOnly: true }
  );
  const res = await strapi.get<StrapiResponseT<HomePageT>>(
    `/home-page?${query}`
  );
  return res.data.data.attributes;
}
