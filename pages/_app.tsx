import '@styles/reset.scss';
import '@styles/globals.scss';
import '@styles/delete-me.scss';
import { AppProps } from 'next/app';



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
