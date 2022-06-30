import { HeaderContentT, InfoBoxT } from './components/common';
import { ProjectT } from './project';
import {
  DynamicZoneMember,
  StrapiAttributesT,
  StrapiPhotoT,
  StrapiResponseT,
} from './strapi';

export interface ProjectPageT extends StrapiAttributesT {
  big_photo: StrapiResponseT<StrapiPhotoT>;
  description: HeaderContentT;
  info_boxes: InfoBoxT[];
  blocks: DynamicZoneMember<{}>[];
  project: StrapiResponseT<ProjectT>;
  next_project_page: StrapiResponseT<ProjectPageT> | null;
  next_project_header: string;
}
