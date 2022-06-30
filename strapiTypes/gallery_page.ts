import {
  StrapiArrayResponseT,
  StrapiAttributesT,
  StrapiPhotoT,
} from './strapi';

export interface GalleryPageT extends StrapiAttributesT {
  title: string;
  photos: StrapiArrayResponseT<StrapiPhotoT>;
}
