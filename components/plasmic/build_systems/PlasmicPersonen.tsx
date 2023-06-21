// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: 9BsVqBrtAT1

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
import ButtonExternalLink from "../../ButtonExternalLink"; // plasmic-import: zlKX0iG_vm/component
import Footer from "../../Footer"; // plasmic-import: hB94XRzTpm/component

import { useScreenVariants as useScreenVariantsjnTclXkDzSl7V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jnTCLXkDZSl7V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems.module.css"; // plasmic-import: jENqvBHbRPXMByDQmRe4G7/projectcss
import sty from "./PlasmicPersonen.module.css"; // plasmic-import: 9BsVqBrtAT1/css

export type PlasmicPersonen__VariantMembers = {};
export type PlasmicPersonen__VariantsArgs = {};
type VariantPropType = keyof PlasmicPersonen__VariantsArgs;
export const PlasmicPersonen__VariantProps = new Array<VariantPropType>();

export type PlasmicPersonen__ArgsType = {};
type ArgPropType = keyof PlasmicPersonen__ArgsType;
export const PlasmicPersonen__ArgProps = new Array<ArgPropType>();

export type PlasmicPersonen__OverridesType = {
  root?: p.Flex<"div">;
  menu?: p.Flex<typeof Menu>;
  img?: p.Flex<typeof p.PlasmicImg>;
  buttonExternalLink?: p.Flex<typeof ButtonExternalLink>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPersonenProps {}

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

function PlasmicPersonen__RenderFunc(props: {
  variants: PlasmicPersonen__VariantsArgs;
  args: PlasmicPersonen__ArgsType;
  overrides: PlasmicPersonen__OverridesType;
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
        <title key="title">{PlasmicPersonen.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPersonen.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPersonen.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicPersonen.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicPersonen.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicPersonen.pageMetadata.description}
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
          <div className={classNames(projectcss.all, sty.freeBox__yqGkF)}>
            <Menu
              data-plasmic-name={"menu"}
              data-plasmic-override={overrides.menu}
              className={classNames("__wab_instance", sty.menu)}
              test={["personen"]}
            />
          </div>
          {true ? (
            <div
              className={classNames(
                projectcss.all,
                sty.freeBox__a3Pcc,
                "blend" as const
              )}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zQdJg,
                  "blend" as const
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Build "
                  : "Build"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bbwxv,
                  ``
                )}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Systems"
                  : "Systems"}
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__riity)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__pBnt6)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__d4KoG
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpläne). Hierfür stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung ökonomischen Indikatoren gegenüber. Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung Investitionsentscheidungen zu treffen."
                    : "Wie viel Nachhaltigkeit möchten Sie planen und umsetzen?\n       Wir stellen die relevanten Entscheidungsgrundlagen bereit, damit Sie den effizientesten\nEntwicklungspfad wählen, schlagkräftige Maßnahmen anstoßen und Stakeholder koordinieren können."}
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___0E0T)} />

          <div className={classNames(projectcss.all, sty.freeBox___6NXyw)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7Mndn
              )}
            >
              {"behält Bedarfe im Blick."}
            </div>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__yRxYx)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox__sswZq)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__cx6X8)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rwEuw
                    )}
                  >
                    {"Worauf Sie ein Auge haben sollten."}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__g77Fq
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpläne). Hierfür stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung ökonomischen Indikatoren gegenüber. Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung Investitionsentscheidungen zu treffen."
                      : "Wir identifizieren die wichtigsten Stellschrauben und zeigen auf, welche Kriterien zu vernachlässigen sind. Sie schaffen Trade-offs in der Emissionsreduktion und wählen die effektivsten Maßnahmen.\n      Das ist unser systemischer Ansatz: Sie wissen genau, worauf Sie sich einlassen, welche Akteure im weiteren Verlauf zu beteiligen sind und welche Gebäudeeigenschaften Ihre Planung herstellen muss."}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__stMgr)} />

          <div className={classNames(projectcss.all, sty.freeBox__x2Kt6)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3QJkp
              )}
            >
              {"arbeitet mit dezidierte Benchmarks die bewährt sind."}
            </div>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__rAKm)}>
                <div className={classNames(projectcss.all, sty.freeBox__jgzIe)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oxN2I
                    )}
                  >
                    {"Wissen, was wirklich hilft!"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xKaT9
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpläne). Hierfür stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung ökonomischen Indikatoren gegenüber. Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung Investitionsentscheidungen zu treffen."
                      : "Sie legen Zielvereinbarungen fest. Wir vergleichen Szenarien zu Bedarfsplanung und Energiebetrachtung und prüfen Planungsansätze hinsichtlich ihrer ESG-Performance. Wir legen die jeweiligen Aussichten auf Zertifizierungen und Förderungen nachvollziehbar dar und zeigen Pfade zu Emissions- und\nKostenzielen auf."}
                  </div>
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___9MEaR)}
                />
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__npX8F)} />

          <div className={classNames(projectcss.all, sty.freeBox__f2Edz)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__j6Fm
              )}
            >
              {"erstellt Vordimensionierungen zu #Anlagentechnik."}
            </div>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__sol6G)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox__uA18H)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__jwSf)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fQyp0
                    )}
                  >
                    {"Wo die Reise hingeht:"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dc7Mh
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpläne). Hierfür stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung ökonomischen Indikatoren gegenüber. Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung Investitionsentscheidungen zu treffen."
                      : "Sie möchten frühzeitig im Prozess die entscheidenden Weichen stellen und Umplanungen vermeiden? Durch integrale Planung bilden wir technische Rahmenbedingungen bis zu einer Detailtiefe des Wandaufbaus ab und übersetzen Anforderungen und Benchmarks in realistische Umsetzungsstrategien."}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wXdd1)} />

          <div className={classNames(projectcss.all, sty.freeBox___3Ke2E)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__j3Zho
              )}
            >
              {"steigerte durch abgestimmte Prozesse baulichen Mehrwert"}
            </div>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___1CKvB)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___732X3)}
                />

                <div
                  className={classNames(projectcss.all, sty.freeBox___962MU)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eTBay
                    )}
                  >
                    {"Wo die Reise hingeht:"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__argNm
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpläne). Hierfür stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung ökonomischen Indikatoren gegenüber. Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung Investitionsentscheidungen zu treffen."
                      : "Sie möchten frühzeitig im Prozess die entscheidenden Weichen stellen und Umplanungen vermeiden? Durch integrale Planung bilden wir technische Rahmenbedingungen bis zu einer Detailtiefe des Wandaufbaus ab und übersetzen Anforderungen und Benchmarks in realistische Umsetzungsstrategien."}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__lg41I)} />

          {true ? (
            <div
              className={classNames(projectcss.all, sty.freeBox___2YEhz, ``)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___3DLvp)}>
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

                <div
                  className={classNames(projectcss.all, sty.freeBox___1Jczq)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__eCDou)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ntnNx)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__erbVq
                      )}
                    >
                      {"Sie haben eine weitere Frage?"}
                    </div>
                    <ButtonExternalLink
                      data-plasmic-name={"buttonExternalLink"}
                      data-plasmic-override={overrides.buttonExternalLink}
                      className={classNames(
                        "__wab_instance",
                        sty.buttonExternalLink
                      )}
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
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menu", "img", "buttonExternalLink", "footer"],
  menu: ["menu"],
  img: ["img"],
  buttonExternalLink: ["buttonExternalLink"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menu: typeof Menu;
  img: typeof p.PlasmicImg;
  buttonExternalLink: typeof ButtonExternalLink;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPersonen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPersonen__VariantsArgs;
    args?: PlasmicPersonen__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPersonen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPersonen__ArgsType,
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
          internalArgPropNames: PlasmicPersonen__ArgProps,
          internalVariantPropNames: PlasmicPersonen__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPersonen__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonen";
  } else {
    func.displayName = `PlasmicPersonen.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonen = Object.assign(
  // Top-level PlasmicPersonen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menu: makeNodeComponent("menu"),
    img: makeNodeComponent("img"),
    buttonExternalLink: makeNodeComponent("buttonExternalLink"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPersonen
    internalVariantProps: PlasmicPersonen__VariantProps,
    internalArgProps: PlasmicPersonen__ArgProps,

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

export default PlasmicPersonen;
/* prettier-ignore-end */