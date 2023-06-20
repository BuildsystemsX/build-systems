// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: jdWzZYnBO3

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
import sty from "./PlasmicSmallButton.module.css"; // plasmic-import: jdWzZYnBO3/css

import ArrowRightAltSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowRightAltSvgrepoComsvg"; // plasmic-import: Lch1PnsAGx/icon

export type PlasmicSmallButton__VariantMembers = {};
export type PlasmicSmallButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicSmallButton__VariantsArgs;
export const PlasmicSmallButton__VariantProps = new Array<VariantPropType>();

export type PlasmicSmallButton__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSmallButton__ArgsType;
export const PlasmicSmallButton__ArgProps = new Array<ArgPropType>("children");

export type PlasmicSmallButton__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultSmallButtonProps {
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

function PlasmicSmallButton__RenderFunc(props: {
  variants: PlasmicSmallButton__VariantsArgs;
  args: PlasmicSmallButton__ArgsType;
  overrides: PlasmicSmallButton__OverridesType;
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
      <ArrowRightAltSvgrepoComsvgIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      {p.renderPlasmicSlot({
        defaultContents: "Action",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSmallButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSmallButton__VariantsArgs;
    args?: PlasmicSmallButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSmallButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSmallButton__ArgsType,
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
          internalArgPropNames: PlasmicSmallButton__ArgProps,
          internalVariantPropNames: PlasmicSmallButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSmallButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSmallButton";
  } else {
    func.displayName = `PlasmicSmallButton.${nodeName}`;
  }
  return func;
}

export const PlasmicSmallButton = Object.assign(
  // Top-level PlasmicSmallButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSmallButton
    internalVariantProps: PlasmicSmallButton__VariantProps,
    internalArgProps: PlasmicSmallButton__ArgProps
  }
);

export default PlasmicSmallButton;
/* prettier-ignore-end */
