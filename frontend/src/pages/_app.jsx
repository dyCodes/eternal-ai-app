import { Layout } from '@/components';
import '@/styles/globals.css';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eternal AI</title>
        <meta
          name='description'
          content='Eternal AI offers AI-driven skin condition assessments based on user images and symptoms, addressing dermatological care gaps in regions with limited access to specialists.'
        />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content='Eternal AI' />
        <meta
          property='og:description'
          content='AI-driven skin condition assessments based on user images and symptoms, addressing dermatological care gaps in regions with limited specialist access.'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}
