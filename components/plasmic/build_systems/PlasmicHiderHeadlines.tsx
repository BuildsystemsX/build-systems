// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: q6j09HfKP8

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems.module.css"; // plasmic-import: jENqvBHbRPXMByDQmRe4G7/projectcss
import sty from "./PlasmicHiderHeadlines.module.css"; // plasmic-import: q6j09HfKP8/css

export type PlasmicHiderHeadlines__VariantMembers = {};
export type PlasmicHiderHeadlines__VariantsArgs = {};
type VariantPropType = keyof PlasmicHiderHeadlines__VariantsArgs;
export const PlasmicHiderHeadlines__VariantProps = new Array<VariantPropType>();

export type PlasmicHiderHeadlines__ArgsType = {};
type ArgPropType = keyof PlasmicHiderHeadlines__ArgsType;
export const PlasmicHiderHeadlines__ArgProps = new Array<ArgPropType>();

export type PlasmicHiderHeadlines__OverridesType = {
  hiderHeadlines?: p.Flex<"div">;
};

export interface DefaultHiderHeadlinesProps {
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

function PlasmicHiderHeadlines__RenderFunc(props: {
  variants: PlasmicHiderHeadlines__VariantsArgs;
  args: PlasmicHiderHeadlines__ArgsType;
  overrides: PlasmicHiderHeadlines__OverridesType;
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
    <div
      data-plasmic-name={"hiderHeadlines"}
      data-plasmic-override={overrides.hiderHeadlines}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.hiderHeadlines
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  hiderHeadlines: ["hiderHeadlines"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  hiderHeadlines: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHiderHeadlines__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHiderHeadlines__VariantsArgs;
    args?: PlasmicHiderHeadlines__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHiderHeadlines__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHiderHeadlines__ArgsType,
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
          internalArgPropNames: PlasmicHiderHeadlines__ArgProps,
          internalVariantPropNames: PlasmicHiderHeadlines__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHiderHeadlines__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "hiderHeadlines") {
    func.displayName = "PlasmicHiderHeadlines";
  } else {
    func.displayName = `PlasmicHiderHeadlines.${nodeName}`;
  }
  return func;
}

export const PlasmicHiderHeadlines = Object.assign(
  // Top-level PlasmicHiderHeadlines renders the root element
  makeNodeComponent("hiderHeadlines"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHiderHeadlines
    internalVariantProps: PlasmicHiderHeadlines__VariantProps,
    internalArgProps: PlasmicHiderHeadlines__ArgProps
  }
);

export default PlasmicHiderHeadlines;
/* prettier-ignore-end */
