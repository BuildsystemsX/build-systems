import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
        <Head>
            <link rel="icon" href="/black-logo.svg" sizes="any" />
        </Head>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
