export interface StrapiResponseT<T extends StrapiAttributesT> {
  data: {
    id: number;
    attributes: T;
  };
}

export interface StrapiArrayResponseT<T extends StrapiAttributesT> {
  data: {
    id: number;
    attributes: T;
  }[];
}

export interface StrapiAttributesT {
  createdAt: string;
  uploadedAt: string;
  publishedAt: string;
}

export interface HeaderContentT {
  id: number;
  header: string;
  content: string;
}

export interface JobAreaColumnT {
  id: number;
  icon: StrapiPhotoT;
  main_content: HeaderContentT;
  details: HeaderContentT[];
}

export interface StrapiPhotoT {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface ProjectT extends StrapiAttributesT {
  mainPhoto: StrapiPhotoT;
  content: HeaderContentT;
}

export interface SocialMediaT {
  id: number;
  content: string;
  link: string;
  icon: StrapiPhotoT;
}

export interface ContactT {
  id: number;
  content: HeaderContentT;
  social_media: SocialMediaT[];
}

export interface HomePageT extends StrapiAttributesT {
  job_area_left_column: JobAreaColumnT;
  job_area_middle_column: JobAreaColumnT;
  job_area_right_column: JobAreaColumnT;
  bio: HeaderContentT;
  works_content: HeaderContentT;
  after_works_content: HeaderContentT;
  projects: StrapiArrayResponseT<ProjectT>;
  contact: ContactT;
  footer_text: string;
}
