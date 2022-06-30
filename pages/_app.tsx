import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import axios from 'axios';

export const strapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
