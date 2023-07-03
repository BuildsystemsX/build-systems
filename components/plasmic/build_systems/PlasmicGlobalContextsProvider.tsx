// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css"; // plasmic-import: qF0uJxFztB/codeComponent
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: L6MfauX2Cw/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;
  parallaxProviderWrapperProps?: Partial<
    Omit<React.ComponentProps<typeof ParallaxProviderWrapper>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, embedCssProps, parallaxProviderWrapperProps } = props;

  return (
    <EmbedCss
      {...embedCssProps}
      css={
        embedCssProps && "css" in embedCssProps
          ? embedCssProps.css!
          : ("@import url( 'https://assets.buildsystems.de/font.css' );\n\n.blend {\n  mix-blend-mode: difference;\n}" as const)
      }
    >
      <ParallaxProviderWrapper
        {...parallaxProviderWrapperProps}
        scrollAxis={
          parallaxProviderWrapperProps &&
          "scrollAxis" in parallaxProviderWrapperProps
            ? parallaxProviderWrapperProps.scrollAxis!
            : ("vertical" as const)
        }
      >
        {children}
      </ParallaxProviderWrapper>
    </EmbedCss>
  );
}
