// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: IKbj2OkZcR

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
import SmallButton from "../../SmallButton"; // plasmic-import: jdWzZYnBO3/component

import { useScreenVariants as useScreenVariantsjnTclXkDzSl7V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jnTCLXkDZSl7V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems.module.css"; // plasmic-import: jENqvBHbRPXMByDQmRe4G7/projectcss
import sty from "./PlasmicProjekt.module.css"; // plasmic-import: IKbj2OkZcR/css

createPlasmicElementProxy;

export type PlasmicProjekt__VariantMembers = {
  expanded: "expanded";
  projekte: "schumacherQuartier" | "urbanScaleTimber";
};
export type PlasmicProjekt__VariantsArgs = {
  expanded?: SingleBooleanChoiceArg<"expanded">;
  projekte?: SingleChoiceArg<"schumacherQuartier" | "urbanScaleTimber">;
};
type VariantPropType = keyof PlasmicProjekt__VariantsArgs;
export const PlasmicProjekt__VariantProps = new Array<VariantPropType>(
  "expanded",
  "projekte"
);

export type PlasmicProjekt__ArgsType = {};
type ArgPropType = keyof PlasmicProjekt__ArgsType;
export const PlasmicProjekt__ArgProps = new Array<ArgPropType>();

export type PlasmicProjekt__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  linkAufProjektseite?: p.Flex<"div">;
};

export interface DefaultProjektProps {
  expanded?: SingleBooleanChoiceArg<"expanded">;
  projekte?: SingleChoiceArg<"schumacherQuartier" | "urbanScaleTimber">;
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

function PlasmicProjekt__RenderFunc(props: {
  variants: PlasmicProjekt__VariantsArgs;
  args: PlasmicProjekt__ArgsType;
  overrides: PlasmicProjekt__OverridesType;
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
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      },
      {
        path: "projekte",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.projekte
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjnTclXkDzSl7V()
  });

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
        sty.root,
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgexpanded]: hasVariant($state, "expanded", "expanded")
        })}
        displayHeight={"auto" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"auto" as const}
        loading={"lazy" as const}
        src={{
          src: "/plasmic/build_systems/images/image.png",
          fullWidth: 760,
          fullHeight: 507,
          aspectRatio: undefined
        }}
      />

      {true ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__duP2I, {
            [sty.freeBoxexpanded__duP2Igsrcc]: hasVariant(
              $state,
              "expanded",
              "expanded"
            ),
            [sty.freeBoxprojekte_schumacherQuartier__duP2IpFtCh]: hasVariant(
              $state,
              "projekte",
              "schumacherQuartier"
            ),
            [sty.freeBoxprojekte_urbanScaleTimber__duP2Irme5U]: hasVariant(
              $state,
              "projekte",
              "urbanScaleTimber"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dF02L,
              {
                [sty.textexpanded__dF02Lgsrcc]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                ),
                [sty.textprojekte_urbanScaleTimber__dF02Lrme5U]: hasVariant(
                  $state,
                  "projekte",
                  "urbanScaleTimber"
                )
              }
            )}
          >
            {hasVariant($state, "projekte", "urbanScaleTimber")
              ? "Urban Scale Timber"
              : "Schumacher Quartier"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___71TmL,
              {
                [sty.textexpanded___71TmLgsrcc]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                ),
                [sty.textprojekte_schumacherQuartier___71TmLpFtCh]: hasVariant(
                  $state,
                  "projekte",
                  "schumacherQuartier"
                ),
                [sty.textprojekte_urbanScaleTimber___71TmLrme5U]: hasVariant(
                  $state,
                  "projekte",
                  "urbanScaleTimber"
                )
              }
            )}
          >
            {hasVariant($state, "projekte", "urbanScaleTimber")
              ? "Der urbane Holzbau ist ein Schl\u00fcsselfaktor auf dem Weg zu klimaneutralen St\u00e4dten. Der Baustoff kann durch sein Potenzial als Kohlenstoffspeicher signifikant zur Reduzierung des 38%-Anteils des Bausektors an den globalen CO2-Emissionen beitragen.\nUrban Scale Timber bietet ein Tool f\u00fcr automatisierte holzbauspezifische Machbarkeitsstudien f\u00fcr private und \u00f6ffentliche Projektentwickler und Planerinnen und macht entsprechendes Fachwissen greifbar, um den Entwicklungsprozess von Holzbauprojekten zu skalieren, zu verbessern und zu beschleunigen."
              : "Das Schumacher Quartier soll als reines Holzbauaurtier auf dem Gel\u00e4nde des ehemaligen Flughafen Tegel in Berlin entstehen. Das Modellquartier steht fu\u0308r \u00f6kologischen Neubau, Nutzungsmischung und innovative Mobilita\u0308tskonzepte sowie energetisch vorbildliche Geba\u0308ude innerhalb eines autoarmen Wohngebiets, das die ausreichende Gru\u0308nversorgung sicherstellt. "}
          </div>
          {true ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__tjgj0, {
                [sty.freeBoxexpanded__tjgj0Gsrcc]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                )
              })}
              onClick={async event => {
                const $steps = {};
                $steps["updateExpanded"] = true
                  ? (() => {
                      const actionArgs = {
                        vgroup: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariant",
                            interactionUuid: "a5lh-WLQM",
                            componentUuid: "IKbj2OkZcR",
                            argName: "vgroup"
                          },
                          () => "expanded"
                        ),
                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariant",
                            interactionUuid: "a5lh-WLQM",
                            componentUuid: "IKbj2OkZcR",
                            argName: "operation"
                          },
                          () => 2
                        ),
                        value: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariant",
                            interactionUuid: "a5lh-WLQM",
                            componentUuid: "IKbj2OkZcR",
                            argName: "value"
                          },
                          () => "expanded"
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariant",
                          interactionUuid: "a5lh-WLQM",
                          componentUuid: "IKbj2OkZcR"
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
                      interactionUuid: "a5lh-WLQM",
                      componentUuid: "IKbj2OkZcR"
                    },
                    $steps["updateExpanded"]
                  );
                }
              }}
            >
              <SmallButton
                className={classNames(
                  "__wab_instance",
                  sty.smallButton__xnyS3,
                  {
                    [sty.smallButtonexpanded__xnyS3Gsrcc]: hasVariant(
                      $state,
                      "expanded",
                      "expanded"
                    )
                  }
                )}
                noLeftSiteShift={
                  hasVariant($state, "expanded", "expanded") ? true : true
                }
                plus={
                  hasVariant($state, "expanded", "expanded") ? true : undefined
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qTlb,
                    {
                      [sty.textexpanded__qTlbgsrcc]: hasVariant(
                        $state,
                        "expanded",
                        "expanded"
                      )
                    }
                  )}
                >
                  {hasVariant($state, "expanded", "expanded")
                    ? "-   weniger "
                    : "mehr Erfahren"}
                </div>
              </SmallButton>
            </div>
          ) : null}
        </div>
      ) : null}
      {(
        hasVariant($state, "projekte", "schumacherQuartier")
          ? true
          : hasVariant($state, "expanded", "expanded")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__peFiP, {
            [sty.freeBoxexpanded__peFiPgsrcc]: hasVariant(
              $state,
              "expanded",
              "expanded"
            ),
            [sty.freeBoxprojekte_schumacherQuartier__peFiPpFtCh]: hasVariant(
              $state,
              "projekte",
              "schumacherQuartier"
            ),
            [sty.freeBoxprojekte_urbanScaleTimber__peFiPrme5U]: hasVariant(
              $state,
              "projekte",
              "urbanScaleTimber"
            )
          })}
        >
          {(
            hasVariant($state, "projekte", "urbanScaleTimber")
              ? true
              : hasVariant($state, "projekte", "schumacherQuartier")
              ? true
              : true
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2HiNw,
                {
                  [sty.textexpanded___2HiNwgsrcc]: hasVariant(
                    $state,
                    "expanded",
                    "expanded"
                  ),
                  [sty.textprojekte_schumacherQuartier___2HiNwpFtCh]:
                    hasVariant($state, "projekte", "schumacherQuartier"),
                  [sty.textprojekte_urbanScaleTimber___2HiNwrme5U]: hasVariant(
                    $state,
                    "projekte",
                    "urbanScaleTimber"
                  )
                }
              )}
            >
              {hasVariant($state, "projekte", "urbanScaleTimber")
                ? "Hierdurch k\u00f6nnen am Anfang der Projektkonzeption bzw. des Planungsprozesses belastbare Szenarien, hinsichtlich Tragwerk, eingesetzten Holzbausystemen, Baukosten und \u00d6kobilanz erzeugt werden. Auf Grundlage hieraus generierter objektspezifischer Holzbau-Varianten k\u00f6nnen Rahmenbedingungen und\nZielvereinbarungen fr\u00fchzeitig festgelegt und in Folge erheblich Planungszeit, -kosten und\n-risiken reduziert werden.\nAls Forschungstransfer erhielt das Team von Urban Scale Timber das Exist- und Fl\u00fcgge-Stipendium und wurde mit dem Gr\u00fcndungspreis + des BMWK ausgezeichnet. "
                : "Aufgrund des angestrebten Modellcharakters wird von allen Beteiligten Kreativit\u00e4t und der Wille zur Innovation erwartet. Neue Wege zu beschreiten, ist die grundlegende Anforderung. \nIm Zuge der Potenzialstudie erarbeiteten Martin Bittmann und Daniel Dieren im Austausch mit der TU Berlin und dem Fraunhofer Institut die Holzbau-Matrix, die der Tegel Projekt GmbH bei der Auswertung des Vergabeverfahrens als Grundlage dient. Die Matrix macht Nachhaltigkeitsaspekte unterschiedlicher Holzbaumethoden greifbar und legt Benchmarks f\u00fcr die Bewertung und den Vergleich der Einreichungen fest.   \n"}
            </div>
          ) : null}
          {(
            hasVariant($state, "projekte", "schumacherQuartier")
              ? true
              : hasVariant($state, "expanded", "expanded")
              ? true
              : true
          ) ? (
            <div
              data-plasmic-name={"linkAufProjektseite"}
              data-plasmic-override={overrides.linkAufProjektseite}
              className={classNames(projectcss.all, sty.linkAufProjektseite, {
                [sty.linkAufProjektseiteexpanded]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                ),
                [sty.linkAufProjektseiteprojekte_schumacherQuartier]:
                  hasVariant($state, "projekte", "schumacherQuartier")
              })}
              onClick={async event => {
                const $steps = {};
                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {};
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "bQPU3Mgyl",
                          componentUuid: "IKbj2OkZcR"
                        },
                        () =>
                          (({ destination }) => {
                            __nextRouter?.push(destination);
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["goToPage"] === "object" &&
                  typeof $steps["goToPage"].then === "function"
                ) {
                  $steps["goToPage"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "navigation",
                      interactionUuid: "bQPU3Mgyl",
                      componentUuid: "IKbj2OkZcR"
                    },
                    $steps["goToPage"]
                  );
                }
              }}
            >
              {true ? (
                <SmallButton
                  className={classNames(
                    "__wab_instance",
                    sty.smallButton__an8NU,
                    {
                      [sty.smallButtonexpanded__an8NUgsrcc]: hasVariant(
                        $state,
                        "expanded",
                        "expanded"
                      )
                    }
                  )}
                  noLeftSiteShift={
                    hasVariant($state, "expanded", "expanded") ? true : true
                  }
                  plus={
                    hasVariant($state, "expanded", "expanded")
                      ? true
                      : undefined
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yZk8,
                      {
                        [sty.textexpanded__yZk8Gsrcc]: hasVariant(
                          $state,
                          "expanded",
                          "expanded"
                        )
                      }
                    )}
                  >
                    {hasVariant($state, "expanded", "expanded")
                      ? "Projektseite"
                      : "mehr Erfahren"}
                  </div>
                </SmallButton>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "linkAufProjektseite"],
  img: ["img"],
  linkAufProjektseite: ["linkAufProjektseite"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  linkAufProjektseite: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjekt__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjekt__VariantsArgs;
    args?: PlasmicProjekt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjekt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjekt__ArgsType,
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
          internalArgPropNames: PlasmicProjekt__ArgProps,
          internalVariantPropNames: PlasmicProjekt__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjekt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjekt";
  } else {
    func.displayName = `PlasmicProjekt.${nodeName}`;
  }
  return func;
}

export const PlasmicProjekt = Object.assign(
  // Top-level PlasmicProjekt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    linkAufProjektseite: makeNodeComponent("linkAufProjektseite"),

    // Metadata about props expected for PlasmicProjekt
    internalVariantProps: PlasmicProjekt__VariantProps,
    internalArgProps: PlasmicProjekt__ArgProps
  }
);

export default PlasmicProjekt;
/* prettier-ignore-end */
