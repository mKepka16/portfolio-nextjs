import axios from 'axios';
import qs from 'qs';
import { Header } from './components/specific/Project/modules/Header';
import { ImageWithDescription } from './components/specific/Project/modules/ImageWithDescription';
import { NumericHeader } from './components/specific/Project/modules/NumericHeader';
import { strapi } from './pages/_app';
import { HeaderContentT } from './strapiTypes/components/common';
import {
  ImageWithDescriptionT,
  NumericHeaderT,
} from './strapiTypes/components/project-pages';
import { ContactT } from './strapiTypes/contact';
import { DynamicZoneMember, StrapiResponseT } from './strapiTypes/strapi';

export const getProjectPageComponent = (
  member: DynamicZoneMember<{}>,
  id: number
) => {
  if (member.__component === 'common.header-content') {
    const typedComponent = member as DynamicZoneMember<HeaderContentT>;
    return <Header key={id} content={typedComponent} />;
  }
  if (member.__component === 'project-pages.numeric-header') {
    const typedComponent = member as DynamicZoneMember<NumericHeaderT>;
    return <NumericHeader key={id} content={typedComponent} />;
  }
  if (member.__component === 'project-pages.image-with-description') {
    const typedComponent = member as DynamicZoneMember<ImageWithDescriptionT>;
    return <ImageWithDescription key={id} content={typedComponent} />;
  }
  return (
    <div key={id} style={{ color: 'black' }}>
      unknown component: {member.__component}
    </div>
  );
};

export const getProjectPagesComponents = (members: DynamicZoneMember<{}>[]) => {
  return members.map((member, i) => getProjectPageComponent(member, i));
};

export async function fetchContactData(): Promise<ContactT> {
  const query = qs.stringify(
    {
      populate: ['content', 'social_media', 'social_media.icon'],
    },
    { encodeValuesOnly: true }
  );
  const res = await strapi.get<StrapiResponseT<ContactT>>(`/contact?${query}`);
  return res.data.data.attributes;
}
