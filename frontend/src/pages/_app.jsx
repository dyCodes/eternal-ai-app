import { Layout } from '@/components';
import '@/styles/globals.css';
import Head from 'next/head';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '@/context/AuthContext';

export default function App({ Component, pageProps }) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;

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

      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </GoogleOAuthProvider>

      <ToastContainer closeOnClick pauseOnFocusLoss={false} />
    </>
  );
}
