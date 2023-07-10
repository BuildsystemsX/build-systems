// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: DQ8n30VKcQl

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
import Menu from "../../Menu"; // plasmic-import: 5tZNLUygwX/component
import BuildSystemsHeadline from "../../BuildSystemsHeadline"; // plasmic-import: k0tLqKtuC3/component
import ImageFooter from "../../ImageFooter"; // plasmic-import: 7Stlw3wb0O/component
import HiderHeadlines from "../../HiderHeadlines"; // plasmic-import: q6j09HfKP8/component

import { useScreenVariants as useScreenVariantsjnTclXkDzSl7V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jnTCLXkDZSl7V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems.module.css"; // plasmic-import: jENqvBHbRPXMByDQmRe4G7/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: DQ8n30VKcQl/css

export type PlasmicServices__VariantMembers = {};
export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: p.Flex<"div">;
  menuStack?: p.Flex<"div">;
  menu?: p.Flex<typeof Menu>;
  buildSystemsHeadline?: p.Flex<typeof BuildSystemsHeadline>;
  imageFooter?: p.Flex<typeof ImageFooter>;
  hiderHeadlines?: p.Flex<typeof HiderHeadlines>;
};

export interface DefaultServicesProps {}

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

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjnTclXkDzSl7V()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicServices.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicServices.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicServices.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicServices.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicServices.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicServices.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div
            data-plasmic-name={"menuStack"}
            data-plasmic-override={overrides.menuStack}
            className={classNames(projectcss.all, sty.menuStack)}
          >
            <Menu
              data-plasmic-name={"menu"}
              data-plasmic-override={overrides.menu}
              className={classNames("__wab_instance", sty.menu)}
              expand={true}
              onSubSite={["services"]}
            />
          </div>
          <BuildSystemsHeadline
            data-plasmic-name={"buildSystemsHeadline"}
            data-plasmic-override={overrides.buildSystemsHeadline}
            className={classNames("__wab_instance", sty.buildSystemsHeadline)}
          />

          <div className={classNames(projectcss.all, sty.freeBox___12MOm)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__shUan)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2Rbld
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                    : "Wie viel Nachhaltigkeit m\u00f6chten bzw. sollten Sie planen und umsetzen?\n      Wir stellen die relevanten Entscheidungsgrundlagen bereit, damit Sie den effizientesten Entwicklungspfad w\u00e4hlen, wirkungsvolle  Ma\u00dfnahmen einleiten und Stakeholder koordinieren k\u00f6nnen."}
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wGxOd)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6DS3A
              )}
            >
              {
                "beh\u00e4lt #Bedarfe, #Funktionalit\u00e4t, #Anforderungen, #Benefits im Blick.\n"
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wfs2Y)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__cjEXv)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox__dg8Ve)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__yQr6T)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fQezy
                    )}
                  >
                    {"Worauf Sie ein Auge haben sollten."}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__x6O2E
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                      : "Wir identifizieren die wichtigsten Stellschrauben und zeigen auf, welche Kriterien zu vernachl\u00e4ssigen sind. Sie schaffen Trade-offs in der Emissionsreduktion und w\u00e4hlen die effektivsten Ma\u00dfnahmen.\n      Das ist unser systemischer Ansatz: Sie wissen genau, worauf Sie sich einlassen, welche Akteure im weiteren Verlauf zu beteiligen sind und welche Geb\u00e4udeeigenschaften Ihre Planung herstellen muss."}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__p9DFd)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__haXv7
              )}
            >
              {
                "Build Systems arbeitet mit dezidierten #Benchmarks/#Indikatoren, die #klima-intelligent /#bew\u00e4hrt sind. "
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__tjNMr)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__onbqv)}>
                <div className={classNames(projectcss.all, sty.freeBox__ysm2R)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__u7EwO
                    )}
                  >
                    {"Wissen, was wirklich hilft!"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cQv9
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                      : "Sie legen Zielvereinbarungen fest. Wir vergleichen Szenarien zu Bedarfsplanung und Energiebetrachtung und pr\u00fcfen Planungsans\u00e4tze hinsichtlich ihrer ESG-Performance. Wir legen die jeweiligen Aussichten auf Zertifizierungen und F\u00f6rderungen nachvollziehbar dar und zeigen Pfade zu Emissions- und\nKostenzielen auf."}
                  </div>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox__vwcX)}
                />
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__hRhT)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9MnBc
              )}
            >
              {
                "Build Systems erstellt Vordimensionierungen zu #Anlagentechnik / #Konstruktionsmethoden / #Materialwahl / #Wiederverwendungspotential.  "
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___2S9Zv)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__aDpLn)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox__br76G)}
                />

                <div
                  className={classNames(projectcss.all, sty.freeBox___4RMxD)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pzWY
                    )}
                  >
                    {"Wo die Reise hingeht:"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zl2Ek
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                      : "Sie m\u00f6chten fr\u00fchzeitig im Prozess die entscheidenden Weichen stellen und Umplanungen vermeiden? Durch integrale Planung bilden wir technische Rahmenbedingungen bis zu einer Detailtiefe des Wandaufbaus ab. Wir \u00fcbersetzen Anforderungen und Benchmarks in realistische Umsetzungsstrategien \u2013 f\u00fcr heute und morgen. "}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__ccPsu)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gxN3H
              )}
            >
              {"steigerte durch abgestimmte Prozesse baulichen Mehrwert"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__cliNj)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__sWrzx)}>
                <div className={classNames(projectcss.all, sty.freeBox__awa6Y)}>
                  <div
                    className={classNames(projectcss.all, sty.columns___3IkF)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__aPdgw)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___1EpLg
                        )}
                      >
                        {"Entscheidungen treffen"}
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__b7Oju)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3Mdbh
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobile")
                          ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                          : "\u25cf Definieren Sie klare Ziele und Erfolgskriterien. Stellen Sie die Entwicklung zum gru\u0308nen Asset mit Blick auf Reporting-Anforderungen und institutionelle K\u00e4ufer sicher.\n\u25cf Pr\u00fcfen Sie anhand der Simulation von bau-, anlagen und energietechnischen Variantenstudien, die Wirkkraft der gew\u00e4hlten Ma\u00dfnahmen und optimieren Sie anhand dezidierter Indikatoren.\n\u25cf Legen Sie Ihren Nachhaltigkeitsfahrplan und entsprechende Benchmarks fu\u0308r den weiteren Planungsverlauf fest."}
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.columns__hl13E)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__iwTbR)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bAwd4
                        )}
                      >
                        {"Verantwortbar handeln"}
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___719Tm)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5Ft3Q
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobile")
                          ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                          : "\u25cf Vereinfachen Sie die Kommunikation mit anschaulichen Reports und verantworten Sie Entscheidungen anhand eindeutiger Indikatoren.\n\u25cf Tracken Sie den Fortschritt im weiteren Verlauf und iterieren Sie effizient bei n\u00f6tigen Anpassungen.\n\u25cf Gew\u00e4hrleisten Sie durch Lebenszyklusorientierte Kostenbetrachtungen langfristige Wertstabilit\u00e4t."}
                      </div>
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.columns__kGhJg)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__dsWWl)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oKgqe
                        )}
                      >
                        {"Finanzierung sicherstellen"}
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__iUows)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__vjDPk
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobile")
                          ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                          : "\u25cf Stellen Sie die Machbarkeit mit einer integralen Herangehensweise sicher und minimieren Sie planerisches Risiko.\n\u25cf Beherrschen Sie fru\u0308hzeitig Kosten und Finanzbedarf. Gew\u00e4hrleisten Sie Konformit\u00e4t mit F\u00f6rderkriterien durch Vordimensionierung und Real-Time-Bewertung.\n\u25cf Legen Sie anhand der Leitindikatoren die Mobilisierung von Finanzmitteln f\u00fcr alle nachvollziehbar dar. "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___3A3If)} />

          <ImageFooter
            data-plasmic-name={"imageFooter"}
            data-plasmic-override={overrides.imageFooter}
            className={classNames("__wab_instance", sty.imageFooter)}
          />

          <HiderHeadlines
            data-plasmic-name={"hiderHeadlines"}
            data-plasmic-override={overrides.hiderHeadlines}
            className={classNames("__wab_instance", sty.hiderHeadlines)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "menuStack",
    "menu",
    "buildSystemsHeadline",
    "imageFooter",
    "hiderHeadlines"
  ],
  menuStack: ["menuStack", "menu"],
  menu: ["menu"],
  buildSystemsHeadline: ["buildSystemsHeadline"],
  imageFooter: ["imageFooter"],
  hiderHeadlines: ["hiderHeadlines"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuStack: "div";
  menu: typeof Menu;
  buildSystemsHeadline: typeof BuildSystemsHeadline;
  imageFooter: typeof ImageFooter;
  hiderHeadlines: typeof HiderHeadlines;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicServices__ArgsType,
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
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuStack: makeNodeComponent("menuStack"),
    menu: makeNodeComponent("menu"),
    buildSystemsHeadline: makeNodeComponent("buildSystemsHeadline"),
    imageFooter: makeNodeComponent("imageFooter"),
    hiderHeadlines: makeNodeComponent("hiderHeadlines"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Build Systems",
      description:
        "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpläne).  Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
