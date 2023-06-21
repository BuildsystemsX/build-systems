// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: 5tZNLUygwX

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
import MenuButton from "../../MenuButton"; // plasmic-import: SCcSFruGPD/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems.module.css"; // plasmic-import: jENqvBHbRPXMByDQmRe4G7/projectcss
import sty from "./PlasmicMenu.module.css"; // plasmic-import: 5tZNLUygwX/css

import BurgerSimpleSvgrepoComsvgIcon from "./icons/PlasmicIcon__BurgerSimpleSvgrepoComsvg"; // plasmic-import: Hj5vDQofk6/icon

export type PlasmicMenu__VariantMembers = {
  test: "services" | "projekte" | "personen";
  expanded: "expanded";
};
export type PlasmicMenu__VariantsArgs = {
  test?: MultiChoiceArg<"services" | "projekte" | "personen">;
  expanded?: SingleBooleanChoiceArg<"expanded">;
};
type VariantPropType = keyof PlasmicMenu__VariantsArgs;
export const PlasmicMenu__VariantProps = new Array<VariantPropType>(
  "test",
  "expanded"
);

export type PlasmicMenu__ArgsType = {};
type ArgPropType = keyof PlasmicMenu__ArgsType;
export const PlasmicMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicMenu__OverridesType = {
  root?: p.Flex<"div">;
  start?: p.Flex<typeof MenuButton>;
  services?: p.Flex<typeof MenuButton>;
  projekte?: p.Flex<typeof MenuButton>;
  personen?: p.Flex<typeof MenuButton>;
  svg?: p.Flex<"svg">;
};

export interface DefaultMenuProps {
  test?: MultiChoiceArg<"services" | "projekte" | "personen">;
  expanded?: SingleBooleanChoiceArg<"expanded">;
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

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs;
  args: PlasmicMenu__ArgsType;
  overrides: PlasmicMenu__OverridesType;
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
        path: "test",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.test
      },
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

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
          { [sty.roottest_projekte]: hasVariant($state, "test", "projekte") }
        )}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__nVtRg, {
            [sty.freeBoxexpanded__nVtRGhsN1X]: hasVariant(
              $state,
              "expanded",
              "expanded"
            ),
            [sty.freeBoxtest_personen__nVtRgUi3Mn]: hasVariant(
              $state,
              "test",
              "personen"
            ),
            [sty.freeBoxtest_projekte__nVtRg0US2U]: hasVariant(
              $state,
              "test",
              "projekte"
            ),
            [sty.freeBoxtest_services__nVtRg7Laf7]: hasVariant(
              $state,
              "test",
              "services"
            )
          })}
        >
          {true ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__zyI38, {
                [sty.freeBoxexpanded__zyI38HsN1X]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                ),
                [sty.freeBoxtest_personen__zyI38Ui3Mn]: hasVariant(
                  $state,
                  "test",
                  "personen"
                ),
                [sty.freeBoxtest_projekte__zyI380US2U]: hasVariant(
                  $state,
                  "test",
                  "projekte"
                ),
                [sty.freeBoxtest_services__zyI387Laf7]: hasVariant(
                  $state,
                  "test",
                  "services"
                )
              })}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__tkhkd,
                  {
                    [sty.linkexpanded__tkhkdhsN1X]: hasVariant(
                      $state,
                      "expanded",
                      "expanded"
                    )
                  }
                )}
                component={Link}
                href={
                  hasVariant($state, "expanded", "expanded")
                    ? `/New`
                    : undefined
                }
                onClick={async event => {
                  const $steps = {};
                  $steps["updateExpanded"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "-m7R7WGR6",
                              componentUuid: "5tZNLUygwX",
                              argName: "vgroup"
                            },
                            () => "expanded"
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "-m7R7WGR6",
                              componentUuid: "5tZNLUygwX",
                              argName: "operation"
                            },
                            () => 2
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariant",
                            interactionUuid: "-m7R7WGR6",
                            componentUuid: "5tZNLUygwX"
                          },
                          () =>
                            (({ vgroup, value }) => {
                              if (typeof value === "string") {
                                value = [value];
                              }

                              const oldValue = p.get($state, vgroup);
                              p.set($state, vgroup, !oldValue);
                              return !oldValue;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateExpanded"] === "object" &&
                    typeof $steps["updateExpanded"].then === "function"
                  ) {
                    $steps["updateExpanded"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "-m7R7WGR6",
                        componentUuid: "5tZNLUygwX"
                      },
                      $steps["updateExpanded"]
                    );
                  }
                }}
                platform={"nextjs"}
              >
                {(
                  hasVariant($state, "expanded", "expanded")
                    ? true
                    : hasVariant($state, "test", "personen")
                    ? true
                    : hasVariant($state, "test", "projekte")
                    ? true
                    : hasVariant($state, "test", "services")
                    ? true
                    : true
                ) ? (
                  <MenuButton
                    data-plasmic-name={"start"}
                    data-plasmic-override={overrides.start}
                    className={classNames("__wab_instance", sty.start, {
                      [sty.startexpanded]: hasVariant(
                        $state,
                        "expanded",
                        "expanded"
                      ),
                      [sty.starttest_personen]: hasVariant(
                        $state,
                        "test",
                        "personen"
                      ),
                      [sty.starttest_projekte]: hasVariant(
                        $state,
                        "test",
                        "projekte"
                      ),
                      [sty.starttest_services]: hasVariant(
                        $state,
                        "test",
                        "services"
                      )
                    })}
                  >
                    {"Start"}
                  </MenuButton>
                ) : null}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__n149K,
                  {
                    [sty.linkexpanded__n149KhsN1X]: hasVariant(
                      $state,
                      "expanded",
                      "expanded"
                    )
                  }
                )}
                component={Link}
                href={
                  hasVariant($state, "expanded", "expanded")
                    ? `/services`
                    : undefined
                }
                onClick={async event => {
                  const $steps = {};
                  $steps["updateExpanded"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "BDiMWkbCC",
                              componentUuid: "5tZNLUygwX",
                              argName: "vgroup"
                            },
                            () => "expanded"
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "BDiMWkbCC",
                              componentUuid: "5tZNLUygwX",
                              argName: "operation"
                            },
                            () => 2
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariant",
                            interactionUuid: "BDiMWkbCC",
                            componentUuid: "5tZNLUygwX"
                          },
                          () =>
                            (({ vgroup, value }) => {
                              if (typeof value === "string") {
                                value = [value];
                              }

                              const oldValue = p.get($state, vgroup);
                              p.set($state, vgroup, !oldValue);
                              return !oldValue;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateExpanded"] === "object" &&
                    typeof $steps["updateExpanded"].then === "function"
                  ) {
                    $steps["updateExpanded"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "BDiMWkbCC",
                        componentUuid: "5tZNLUygwX"
                      },
                      $steps["updateExpanded"]
                    );
                  }
                }}
                platform={"nextjs"}
              >
                {(
                  hasVariant($state, "expanded", "expanded")
                    ? true
                    : hasVariant($state, "test", "personen")
                    ? true
                    : hasVariant($state, "test", "projekte")
                    ? true
                    : hasVariant($state, "test", "services")
                    ? true
                    : true
                ) ? (
                  <MenuButton
                    data-plasmic-name={"services"}
                    data-plasmic-override={overrides.services}
                    className={classNames("__wab_instance", sty.services, {
                      [sty.servicesexpanded]: hasVariant(
                        $state,
                        "expanded",
                        "expanded"
                      ),
                      [sty.servicestest_personen]: hasVariant(
                        $state,
                        "test",
                        "personen"
                      ),
                      [sty.servicestest_projekte]: hasVariant(
                        $state,
                        "test",
                        "projekte"
                      ),
                      [sty.servicestest_services]: hasVariant(
                        $state,
                        "test",
                        "services"
                      )
                    })}
                  >
                    {"Services"}
                  </MenuButton>
                ) : null}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__qraVz,
                  {
                    [sty.linkexpanded__qraVzhsN1X]: hasVariant(
                      $state,
                      "expanded",
                      "expanded"
                    )
                  }
                )}
                component={Link}
                href={
                  hasVariant($state, "expanded", "expanded")
                    ? `/projekte`
                    : undefined
                }
                onClick={async event => {
                  const $steps = {};
                  $steps["updateExpanded"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "rTxFejjws",
                              componentUuid: "5tZNLUygwX",
                              argName: "vgroup"
                            },
                            () => "expanded"
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "rTxFejjws",
                              componentUuid: "5tZNLUygwX",
                              argName: "operation"
                            },
                            () => 2
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariant",
                            interactionUuid: "rTxFejjws",
                            componentUuid: "5tZNLUygwX"
                          },
                          () =>
                            (({ vgroup, value }) => {
                              if (typeof value === "string") {
                                value = [value];
                              }

                              const oldValue = p.get($state, vgroup);
                              p.set($state, vgroup, !oldValue);
                              return !oldValue;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateExpanded"] === "object" &&
                    typeof $steps["updateExpanded"].then === "function"
                  ) {
                    $steps["updateExpanded"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "rTxFejjws",
                        componentUuid: "5tZNLUygwX"
                      },
                      $steps["updateExpanded"]
                    );
                  }
                }}
                platform={"nextjs"}
              >
                {(
                  hasVariant($state, "expanded", "expanded")
                    ? true
                    : hasVariant($state, "test", "personen")
                    ? true
                    : hasVariant($state, "test", "projekte")
                    ? true
                    : hasVariant($state, "test", "services")
                    ? true
                    : true
                ) ? (
                  <MenuButton
                    data-plasmic-name={"projekte"}
                    data-plasmic-override={overrides.projekte}
                    className={classNames("__wab_instance", sty.projekte, {
                      [sty.projekteexpanded]: hasVariant(
                        $state,
                        "expanded",
                        "expanded"
                      ),
                      [sty.projektetest_personen]: hasVariant(
                        $state,
                        "test",
                        "personen"
                      ),
                      [sty.projektetest_projekte]: hasVariant(
                        $state,
                        "test",
                        "projekte"
                      ),
                      [sty.projektetest_services]: hasVariant(
                        $state,
                        "test",
                        "services"
                      )
                    })}
                  >
                    {"Projekte"}
                  </MenuButton>
                ) : null}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__h4FSf,
                  {
                    [sty.linkexpanded__h4FSfhsN1X]: hasVariant(
                      $state,
                      "expanded",
                      "expanded"
                    )
                  }
                )}
                component={Link}
                href={
                  hasVariant($state, "expanded", "expanded")
                    ? `/personen`
                    : undefined
                }
                onClick={async event => {
                  const $steps = {};
                  $steps["updateExpanded"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "d8TzXIrD2",
                              componentUuid: "5tZNLUygwX",
                              argName: "vgroup"
                            },
                            () => "expanded"
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "d8TzXIrD2",
                              componentUuid: "5tZNLUygwX",
                              argName: "operation"
                            },
                            () => 2
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariant",
                            interactionUuid: "d8TzXIrD2",
                            componentUuid: "5tZNLUygwX"
                          },
                          () =>
                            (({ vgroup, value }) => {
                              if (typeof value === "string") {
                                value = [value];
                              }

                              const oldValue = p.get($state, vgroup);
                              p.set($state, vgroup, !oldValue);
                              return !oldValue;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateExpanded"] === "object" &&
                    typeof $steps["updateExpanded"].then === "function"
                  ) {
                    $steps["updateExpanded"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "d8TzXIrD2",
                        componentUuid: "5tZNLUygwX"
                      },
                      $steps["updateExpanded"]
                    );
                  }
                }}
                platform={"nextjs"}
              >
                {(
                  hasVariant($state, "expanded", "expanded")
                    ? true
                    : hasVariant($state, "test", "personen")
                    ? true
                    : hasVariant($state, "test", "projekte")
                    ? true
                    : hasVariant($state, "test", "services")
                    ? true
                    : true
                ) ? (
                  <MenuButton
                    data-plasmic-name={"personen"}
                    data-plasmic-override={overrides.personen}
                    className={classNames("__wab_instance", sty.personen, {
                      [sty.personenexpanded]: hasVariant(
                        $state,
                        "expanded",
                        "expanded"
                      ),
                      [sty.personentest_personen]: hasVariant(
                        $state,
                        "test",
                        "personen"
                      ),
                      [sty.personentest_projekte]: hasVariant(
                        $state,
                        "test",
                        "projekte"
                      ),
                      [sty.personentest_services]: hasVariant(
                        $state,
                        "test",
                        "services"
                      )
                    })}
                  >
                    {"Personen"}
                  </MenuButton>
                ) : null}
              </p.PlasmicLink>
            </div>
          ) : null}
          <div
            className={classNames(projectcss.all, sty.freeBox__gn5HA)}
            onClick={async event => {
              const $steps = {};
              $steps["updateStateVariable"] = true
                ? (() => {
                    const actionArgs = {};
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariable",
                        interactionUuid: "GqCSh6tbG",
                        componentUuid: "5tZNLUygwX"
                      },
                      () =>
                        (({ variable, value, startIndex, deleteCount }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          undefined;
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["updateStateVariable"] === "object" &&
                typeof $steps["updateStateVariable"].then === "function"
              ) {
                $steps["updateStateVariable"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "updateVariable",
                    interactionUuid: "GqCSh6tbG",
                    componentUuid: "5tZNLUygwX"
                  },
                  $steps["updateStateVariable"]
                );
              }
            }}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__ptCVk, {
                [sty.freeBoxexpanded__ptCVkhsN1X]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                ),
                [sty.freeBoxtest_personen__ptCVkUi3Mn]: hasVariant(
                  $state,
                  "test",
                  "personen"
                ),
                [sty.freeBoxtest_projekte__ptCVk0US2U]: hasVariant(
                  $state,
                  "test",
                  "projekte"
                ),
                [sty.freeBoxtest_services__ptCVk7Laf7]: hasVariant(
                  $state,
                  "test",
                  "services"
                )
              })}
              onClick={async event => {
                const $steps = {};
                $steps["updateServicesVariant"] = true
                  ? (() => {
                      const actionArgs = {
                        vgroup: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariant",
                            interactionUuid: "yzY0AUoXw",
                            componentUuid: "5tZNLUygwX",
                            argName: "vgroup"
                          },
                          () => "expanded"
                        ),
                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariant",
                            interactionUuid: "yzY0AUoXw",
                            componentUuid: "5tZNLUygwX",
                            argName: "operation"
                          },
                          () => 2
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariant",
                          interactionUuid: "yzY0AUoXw",
                          componentUuid: "5tZNLUygwX"
                        },
                        () =>
                          (({ vgroup, value }) => {
                            if (typeof value === "string") {
                              value = [value];
                            }

                            const oldValue = p.get($state, vgroup);
                            p.set($state, vgroup, !oldValue);
                            return !oldValue;
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["updateServicesVariant"] === "object" &&
                  typeof $steps["updateServicesVariant"].then === "function"
                ) {
                  $steps["updateServicesVariant"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "yzY0AUoXw",
                      componentUuid: "5tZNLUygwX"
                    },
                    $steps["updateServicesVariant"]
                  );
                }
              }}
            >
              <BurgerSimpleSvgrepoComsvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </div>
          </div>
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "start", "services", "projekte", "personen", "svg"],
  start: ["start"],
  services: ["services"],
  projekte: ["projekte"],
  personen: ["personen"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  start: typeof MenuButton;
  services: typeof MenuButton;
  projekte: typeof MenuButton;
  personen: typeof MenuButton;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenu__VariantsArgs;
    args?: PlasmicMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenu__ArgsType,
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
          internalArgPropNames: PlasmicMenu__ArgProps,
          internalVariantPropNames: PlasmicMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenu";
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    start: makeNodeComponent("start"),
    services: makeNodeComponent("services"),
    projekte: makeNodeComponent("projekte"),
    personen: makeNodeComponent("personen"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps
  }
);

export default PlasmicMenu;
/* prettier-ignore-end */