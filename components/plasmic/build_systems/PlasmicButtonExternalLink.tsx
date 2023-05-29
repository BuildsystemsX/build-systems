// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: noJZH-4dRr

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
import sty from "./PlasmicButtonExternalLink.module.css"; // plasmic-import: noJZH-4dRr/css

export type PlasmicButtonExternalLink__VariantMembers = {};
export type PlasmicButtonExternalLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicButtonExternalLink__VariantsArgs;
export const PlasmicButtonExternalLink__VariantProps =
  new Array<VariantPropType>();

export type PlasmicButtonExternalLink__ArgsType = {
  destinationLink?: string;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicButtonExternalLink__ArgsType;
export const PlasmicButtonExternalLink__ArgProps = new Array<ArgPropType>(
  "destinationLink",
  "children"
);

export type PlasmicButtonExternalLink__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultButtonExternalLinkProps {
  destinationLink?: string;
  children?: React.ReactNode;
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

function PlasmicButtonExternalLink__RenderFunc(props: {
  variants: PlasmicButtonExternalLink__VariantsArgs;
  args: PlasmicButtonExternalLink__ArgsType;
  overrides: PlasmicButtonExternalLink__OverridesType;
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
        sty.root
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={args.destinationLink}
        platform={"nextjs"}
        target={"_blank" as const}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Action",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonExternalLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonExternalLink__VariantsArgs;
    args?: PlasmicButtonExternalLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonExternalLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButtonExternalLink__ArgsType,
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
          internalArgPropNames: PlasmicButtonExternalLink__ArgProps,
          internalVariantPropNames: PlasmicButtonExternalLink__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButtonExternalLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonExternalLink";
  } else {
    func.displayName = `PlasmicButtonExternalLink.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonExternalLink = Object.assign(
  // Top-level PlasmicButtonExternalLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicButtonExternalLink
    internalVariantProps: PlasmicButtonExternalLink__VariantProps,
    internalArgProps: PlasmicButtonExternalLink__ArgProps
  }
);

export default PlasmicButtonExternalLink;
/* prettier-ignore-end */
