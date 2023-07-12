// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: k0tLqKtuC3

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
import sty from "./PlasmicBuildSystemsHeadline.module.css"; // plasmic-import: k0tLqKtuC3/css

createPlasmicElementProxy;

export type PlasmicBuildSystemsHeadline__VariantMembers = {
  transparent: "transparent";
  big: "big";
};
export type PlasmicBuildSystemsHeadline__VariantsArgs = {
  transparent?: SingleBooleanChoiceArg<"transparent">;
  big?: SingleBooleanChoiceArg<"big">;
};
type VariantPropType = keyof PlasmicBuildSystemsHeadline__VariantsArgs;
export const PlasmicBuildSystemsHeadline__VariantProps =
  new Array<VariantPropType>("transparent", "big");

export type PlasmicBuildSystemsHeadline__ArgsType = {};
type ArgPropType = keyof PlasmicBuildSystemsHeadline__ArgsType;
export const PlasmicBuildSystemsHeadline__ArgProps = new Array<ArgPropType>();

export type PlasmicBuildSystemsHeadline__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultBuildSystemsHeadlineProps {
  transparent?: SingleBooleanChoiceArg<"transparent">;
  big?: SingleBooleanChoiceArg<"big">;
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

function PlasmicBuildSystemsHeadline__RenderFunc(props: {
  variants: PlasmicBuildSystemsHeadline__VariantsArgs;
  args: PlasmicBuildSystemsHeadline__ArgsType;
  overrides: PlasmicBuildSystemsHeadline__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "transparent",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.transparent
      },
      {
        path: "big",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.big
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });

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
          "blend" as const,
          {
            [sty.roottransparent]: hasVariant(
              $state,
              "transparent",
              "transparent"
            )
          }
        )}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__hTv1W,
            "blend" as const,
            {
              [sty.textbig__hTv1W9Cpjs]: hasVariant($state, "big", "big"),
              [sty.texttransparent__hTv1WRxVzc]: hasVariant(
                $state,
                "transparent",
                "transparent"
              )
            }
          )}
        >
          {"Build"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___6XRo5,
            ``,
            {
              [sty.textbig___6XRo59Cpjs]: hasVariant($state, "big", "big"),
              [sty.texttransparent___6XRo5RxVzc]: hasVariant(
                $state,
                "transparent",
                "transparent"
              )
            }
          )}
        >
          {"Systems"}
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBuildSystemsHeadline__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBuildSystemsHeadline__VariantsArgs;
    args?: PlasmicBuildSystemsHeadline__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBuildSystemsHeadline__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBuildSystemsHeadline__ArgsType,
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
          internalArgPropNames: PlasmicBuildSystemsHeadline__ArgProps,
          internalVariantPropNames: PlasmicBuildSystemsHeadline__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBuildSystemsHeadline__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBuildSystemsHeadline";
  } else {
    func.displayName = `PlasmicBuildSystemsHeadline.${nodeName}`;
  }
  return func;
}

export const PlasmicBuildSystemsHeadline = Object.assign(
  // Top-level PlasmicBuildSystemsHeadline renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBuildSystemsHeadline
    internalVariantProps: PlasmicBuildSystemsHeadline__VariantProps,
    internalArgProps: PlasmicBuildSystemsHeadline__ArgProps
  }
);

export default PlasmicBuildSystemsHeadline;
/* prettier-ignore-end */
