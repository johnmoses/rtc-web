import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import 'styles/main.scss';
import Head from 'next/head';
import React from 'react';
import { AppProvider } from 'context/AppContext';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <Head>
          <title>RTC APP</title>
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  );
}

export default App;
