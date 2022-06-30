import { HeaderContentT, InfoBoxT } from './components/common';
import { ProjectT } from './project';
import { StrapiAttributesT, StrapiArrayResponseT } from './strapi';

export interface HomePageT extends StrapiAttributesT {
  job_area_left_column: InfoBoxT;
  job_area_middle_column: InfoBoxT;
  job_area_right_column: InfoBoxT;
  bio: HeaderContentT;
  works_content: HeaderContentT;
  after_works_content: HeaderContentT;
  projects: StrapiArrayResponseT<ProjectT>;
  footer_text: string;
}
