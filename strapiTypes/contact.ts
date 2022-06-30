import { HeaderContentT, SocialMediaT } from './components/common';
import { StrapiAttributesT } from './strapi';

export interface ContactT extends StrapiAttributesT {
  content: HeaderContentT;
  social_media: SocialMediaT[];
  footer_text: string;
}
