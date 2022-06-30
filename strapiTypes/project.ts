import { HeaderContentT } from './components/common';
import { ProjectPageT } from './project_page';
import { StrapiAttributesT, StrapiPhotoT, StrapiResponseT } from './strapi';

export interface ProjectT extends StrapiAttributesT {
  main_photo: StrapiResponseT<StrapiPhotoT>;
  content: HeaderContentT;
  project_page: StrapiResponseT<ProjectPageT>;
}
