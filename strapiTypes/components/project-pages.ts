import { StrapiPhotoT, StrapiResponseT } from '../strapi';
import { ButtonT, HeaderContentT } from './common';

// Dynamic zone members
export interface ImageWithDescriptionT {
  id: number;
  image_position: 'left' | 'right';
  description: string;
  additional_info: string;
  image: StrapiResponseT<StrapiPhotoT>;
  buttons: ButtonT[];
}

export interface NumericHeaderT {
  number: string;
  subheader: string;
}
