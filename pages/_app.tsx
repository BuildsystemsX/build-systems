import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from 'next/font/local';
import * as React from 'react';

const diatypeMedium = localFont({
    src: '../fonts/ABCDiatype-Medium.woff2',
    weight: '900',
    style: 'normal',
    display: 'swap',
    variable: '--DiatypeMedium'
});

const diatypeMediumMono = localFont({
    src: '../fonts/ABCDiatypeMono-Medium.woff2',
    weight: '900',
    style: 'normal',
    display: 'swap',
    variable: '--DiatypeMediumMono'
});

export default function MyApp({ Component, pageProps }: AppProps) {
    // Set the CSS variable on <body> to ensure Plasmic Studio has access to the variable.
    React.useEffect(() => {
        document.body.classList.add(diatypeMedium.variable);
        document.body.classList.add(diatypeMediumMono.variable);
    }, []);
  return (
    <PlasmicRootProvider Head={Head}>
        <Head>
            <link rel="icon" href="/black-logo.svg" sizes="any" />
        </Head>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
