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
}

export interface StrapiPhotoT extends StrapiAttributesT {
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
}

export type DynamicZoneMember<T> = { __component: string } & T;
