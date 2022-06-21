import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import axios from 'axios';

axios.defaults.headers.common[
  'Authorization'
] = `bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
console.log(process.env.NEXT_PUBLIC_STRAPI_TOKEN);
console.log(process.env.NEXT_PUBLIC_STRAPI_URL);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
