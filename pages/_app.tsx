import { pageView } from "@lib/gtag";
import Router from "next/router";
import React, { Fragment } from "react";
import "@theme/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

Router.events.on("routeChangeComplete", (url) => pageView(url));

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template Generator" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
