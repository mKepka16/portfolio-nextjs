import { StrapiAttributesT } from './types';

export interface StrapiArrayResponseT<T extends StrapiAttributesT> {
  data: {
    id: number;
    attributes: T;
  }[];
}
