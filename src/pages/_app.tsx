import { AppProps } from 'next/app';
import '@/styles/global.css';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@/lib/gtag';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics GA_TRACKING_ID={gtag.GA_TRACKING_ID} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
