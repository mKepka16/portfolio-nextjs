import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { LandingSection } from '../components/specific/Home/LandingSection';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Michał Kępka</title>
        <meta name='description' content='Michał Kępka Porfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingSection />
    </div>
  );
};

export default Home;
