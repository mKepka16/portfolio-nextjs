import { StrapiAttributesT, StrapiPhotoT, StrapiResponseT } from './strapi';

export interface CVPageT extends StrapiAttributesT {
  pdf: StrapiResponseT<StrapiPhotoT>;
}
