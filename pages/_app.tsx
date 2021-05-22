import '@theme/icons.css';

import ThemeSwitch from '@components/ThemeSwitch';
import { pageView } from '@lib/gtag';
import { darkTheme, globalStyles } from '@theme/config';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import React, { Fragment } from 'react';

Router.events.on('routeChangeComplete', (url: string) => pageView(url));

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <Fragment>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template Generator" />
      </Head>
      <ThemeProvider
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
        <ThemeSwitch />
      </ThemeProvider>
    </Fragment>
  );
};

export default MyApp;
