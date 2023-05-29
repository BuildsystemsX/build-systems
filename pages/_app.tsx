import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from 'next/font/local';
import * as React from 'react';

const reallySansLarge = localFont({
    src: '../fonts/ABCDiatype-Medium.woff2',
    weight: '900',
    style: 'normal',
    display: 'swap',
    variable: '--Medium'
});

export default function MyApp({ Component, pageProps }: AppProps) {
    // Set the CSS variable on <body> to ensure Plasmic Studio has access to the variable.
    React.useEffect(() => {
        document.body.classList.add(reallySansLarge.variable);
    }, []);
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
