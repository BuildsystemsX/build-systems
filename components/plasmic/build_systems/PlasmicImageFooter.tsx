// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: 7Stlw3wb0O

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonExternalLink from "../../ButtonExternalLink"; // plasmic-import: zlKX0iG_vm/component
import Footer from "../../Footer"; // plasmic-import: hB94XRzTpm/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems.module.css"; // plasmic-import: jENqvBHbRPXMByDQmRe4G7/projectcss
import sty from "./PlasmicImageFooter.module.css"; // plasmic-import: 7Stlw3wb0O/css

export type PlasmicImageFooter__VariantMembers = {};
export type PlasmicImageFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicImageFooter__VariantsArgs;
export const PlasmicImageFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicImageFooter__ArgsType = {};
type ArgPropType = keyof PlasmicImageFooter__ArgsType;
export const PlasmicImageFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicImageFooter__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
  buttonExternalLink?: p.Flex<typeof ButtonExternalLink>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultImageFooterProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicImageFooter__RenderFunc(props: {
  variants: PlasmicImageFooter__VariantsArgs;
  args: PlasmicImageFooter__ArgsType;
  overrides: PlasmicImageFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root,
          ``
        )}
      >
        <div className={classNames(projectcss.all, sty.freeBox__sypeS)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"100%" as const}
            src={{
              src: "/plasmic/build_systems/images/desktopRenderingjpg.jpg",
              fullWidth: 3146,
              fullHeight: 2000,
              aspectRatio: undefined
            }}
          />

          <div className={classNames(projectcss.all, sty.freeBox__mVkwu)} />

          <div className={classNames(projectcss.all, sty.freeBox__nln9Q)}>
            <div className={classNames(projectcss.all, sty.freeBox__l623P)}>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"Sie haben eine weitere Frage?"}
              </div>
              <ButtonExternalLink
                data-plasmic-name={"buttonExternalLink"}
                data-plasmic-override={overrides.buttonExternalLink}
                className={classNames("__wab_instance", sty.buttonExternalLink)}
                link={"mailto:mail@buildsystems.de" as const}
              >
                {"Schreiben Sie uns eine Mail!"}
              </ButtonExternalLink>
            </div>
          </div>
        </div>
        <Footer
          data-plasmic-name={"footer"}
          data-plasmic-override={overrides.footer}
          className={classNames("__wab_instance", sty.footer)}
        />
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "text", "buttonExternalLink", "footer"],
  img: ["img"],
  text: ["text"],
  buttonExternalLink: ["buttonExternalLink"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  text: "div";
  buttonExternalLink: typeof ButtonExternalLink;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicImageFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicImageFooter__VariantsArgs;
    args?: PlasmicImageFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicImageFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicImageFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicImageFooter__ArgProps,
          internalVariantPropNames: PlasmicImageFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicImageFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImageFooter";
  } else {
    func.displayName = `PlasmicImageFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicImageFooter = Object.assign(
  // Top-level PlasmicImageFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    buttonExternalLink: makeNodeComponent("buttonExternalLink"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicImageFooter
    internalVariantProps: PlasmicImageFooter__VariantProps,
    internalArgProps: PlasmicImageFooter__ArgProps
  }
);

export default PlasmicImageFooter;
/* prettier-ignore-end */
