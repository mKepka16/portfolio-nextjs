import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import qs from 'qs';
import { Cards } from '../../components/dummy/Cards';
import { Contact } from '../../components/dummy/Contact';
import { Footer } from '../../components/dummy/Footer';
import { GoToBlock } from '../../components/dummy/GoToBlock';
import { GalleryPhoto } from '../../components/specific/Gallery/GalleryPhoto';
import { LandingSection } from '../../components/specific/Gallery/LandingSection';
import { fetchContactData, getProjectPagesComponents } from '../../helpers';
import { ContactT } from '../../strapiTypes/contact';
import { GalleryPageT } from '../../strapiTypes/gallery_page';
import { ProjectPageT } from '../../strapiTypes/project_page';
import {
  StrapiResponseT,
  StrapiArrayResponseT,
} from '../../strapiTypes/strapi';
import { strapi } from '../_app';

interface Props {
  galleryPageData: GalleryPageT;
  contactData: ContactT;
}

const GalleryPage: NextPage<Props> = ({ galleryPageData, contactData }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Gallery - Michał Kępka</title>
        <meta name='description' content='Michał Kępka Gallery' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingSection
        photosAmount={galleryPageData.photos.data.length}
        title={galleryPageData.title}
      />

      <main>
        {galleryPageData.photos.data.map((photo) => (
          <GalleryPhoto key={photo.id} photo={photo.attributes} />
        ))}
      </main>

      <GoToBlock
        header={galleryPageData.title}
        bigText={'Go back'}
        onClick={() => router.back()}
      />

      <Contact contact={contactData} />
      <Footer footer_text={contactData.footer_text} />
    </div>
  );
};

export default GalleryPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const galleryPageData = await fetchGalleryData(context.params?.id as string);
  const contactData = await fetchContactData();

  return {
    props: {
      galleryPageData,
      contactData,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await strapi.get<StrapiArrayResponseT<GalleryPageT>>(
    '/gallery-pages'
  );
  const ids = res.data.data.map((galleryPage) => galleryPage.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

async function fetchGalleryData(id: string): Promise<GalleryPageT> {
  const query = qs.stringify(
    {
      populate: '*',
    },
    { encodeValuesOnly: true }
  );
  const res = await strapi.get<StrapiResponseT<GalleryPageT>>(
    `gallery-pages/${id}?${query}`
  );

  return res.data.data.attributes;
}
