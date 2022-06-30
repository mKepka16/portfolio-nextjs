import { StrapiPhotoT, StrapiResponseT } from '../strapi';

export interface HeaderContentT {
  id: number;
  header: string;
  content: string;
}

export interface InfoBoxT {
  id: number;
  icon: StrapiResponseT<StrapiPhotoT>;
  main_content: HeaderContentT;
  details: HeaderContentT[];
}

export interface SocialMediaT {
  id: number;
  content: string;
  link: string;
  icon: StrapiResponseT<StrapiPhotoT>;
}

export interface ButtonT {
  id: number;
  text: string;
  link: string;
  is_external: boolean;
}
