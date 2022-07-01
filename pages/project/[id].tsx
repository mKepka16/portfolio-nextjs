import axios from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import qs from 'qs';
import { Cards } from '../../components/dummy/Cards';
import { Contact } from '../../components/dummy/Contact';
import { Footer } from '../../components/dummy/Footer';
import { GoToBlock } from '../../components/dummy/GoToBlock';
import { LandingSection } from '../../components/specific/Project/LandingSection';
import { fetchContactData, getProjectPagesComponents } from '../../helpers';
import { ContactT } from '../../strapiTypes/contact';
import { ProjectPageT } from '../../strapiTypes/project_page';
import {
  StrapiResponseT,
  StrapiArrayResponseT,
} from '../../strapiTypes/strapi';
import { strapi } from '../_app';

interface Props {
  projectPageData: ProjectPageT;
  contactData: ContactT;
}

const ProjectPage: NextPage<Props> = ({ projectPageData, contactData }) => {
  return (
    <div>
      <Head>
        <title>Project -Michał Kępka</title>
        <meta name='description' content='Michał Kępka Project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingSection
        bigPhoto={projectPageData.big_photo}
        header={projectPageData.project.data.attributes.content}
      />
      <main>
        <Cards
          header={projectPageData.description.header}
          description={projectPageData.description.content}
          cards={projectPageData.info_boxes}
        />

        {getProjectPagesComponents(projectPageData.blocks)}
      </main>
      {projectPageData.next_project_page && (
        <GoToBlock
          bigText={
            projectPageData.next_project_page.data.attributes.project.data
              .attributes.content.header
          }
          header={projectPageData.next_project_header}
          link={`/project/${projectPageData.next_project_page.data.id}`}
        />
      )}

      <Contact contact={contactData} />
      <Footer footer_text={contactData.footer_text} />
    </div>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const projectPageData = await fetchProjectData(context.params?.id as string);
  const contactData = await fetchContactData();

  return {
    props: {
      projectPageData,
      contactData,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await strapi.get<StrapiArrayResponseT<ProjectPageT>>(
    '/project-pages'
  );
  const ids = res.data.data.map((projectPage) => projectPage.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

async function fetchProjectData(id: string): Promise<ProjectPageT> {
  const query = qs.stringify(
    {
      populate: {
        project: {
          populate: 'content',
        },
        next_project_page: {
          populate: 'project.content',
        },
        next_project_header: {
          populate: '*',
        },
        big_photo: {
          populate: '*',
        },
        description: {
          populate: '*',
        },
        info_boxes: {
          populate: '*',
        },
        blocks: {
          populate: '*',
        },
      },
    },
    { encodeValuesOnly: true }
  );
  const res = await strapi.get<StrapiResponseT<ProjectPageT>>(
    `project-pages/${id}?${query}`
  );

  return res.data.data.attributes;
}
