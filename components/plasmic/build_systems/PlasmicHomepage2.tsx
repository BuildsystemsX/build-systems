// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jENqvBHbRPXMByDQmRe4G7
// Component: MxT9ttJsa--

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
import BuildSystemsHeadline from "../../BuildSystemsHeadline"; // plasmic-import: k0tLqKtuC3/component
import Cover from "../../Cover"; // plasmic-import: y8WKJEXfAa/component
import Menu from "../../Menu"; // plasmic-import: 5tZNLUygwX/component
import SmallButton from "../../SmallButton"; // plasmic-import: jdWzZYnBO3/component
import Footer from "../../Footer"; // plasmic-import: hB94XRzTpm/component

import { useScreenVariants as useScreenVariantsjnTclXkDzSl7V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jnTCLXkDZSl7V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems.module.css"; // plasmic-import: jENqvBHbRPXMByDQmRe4G7/projectcss
import sty from "./PlasmicHomepage2.module.css"; // plasmic-import: MxT9ttJsa--/css

export type PlasmicHomepage2__VariantMembers = {};
export type PlasmicHomepage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage2__VariantsArgs;
export const PlasmicHomepage2__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage2__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage2__ArgsType;
export const PlasmicHomepage2__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage2__OverridesType = {
  root?: p.Flex<"div">;
  buildSystemsHeadline?: p.Flex<typeof BuildSystemsHeadline>;
  cover?: p.Flex<typeof Cover>;
  menu?: p.Flex<typeof Menu>;
  img?: p.Flex<typeof p.PlasmicImg>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepage2Props {}

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

function PlasmicHomepage2__RenderFunc(props: {
  variants: PlasmicHomepage2__VariantsArgs;
  args: PlasmicHomepage2__ArgsType;
  overrides: PlasmicHomepage2__OverridesType;
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
        <title key="title">{PlasmicHomepage2.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage2.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage2.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicHomepage2.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicHomepage2.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicHomepage2.pageMetadata.description}
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
          {true ? (
            <BuildSystemsHeadline
              data-plasmic-name={"buildSystemsHeadline"}
              data-plasmic-override={overrides.buildSystemsHeadline}
              className={classNames("__wab_instance", sty.buildSystemsHeadline)}
            />
          ) : null}
          <Cover
            data-plasmic-name={"cover"}
            data-plasmic-override={overrides.cover}
            className={classNames("__wab_instance", sty.cover)}
          />

          <div className={classNames(projectcss.all, sty.freeBox___332Cd)}>
            <Menu
              data-plasmic-name={"menu"}
              data-plasmic-override={overrides.menu}
              className={classNames("__wab_instance", sty.menu)}
            />
          </div>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__q7Jq, ``)}>
              <div className={classNames(projectcss.all, sty.freeBox__wvlpk)}>
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
                  className={classNames(projectcss.all, sty.freeBox__caDi)}
                />
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__tM9Gj)} />

          <div className={classNames(projectcss.all, sty.freeBox__alDgg)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ooJwq
              )}
            >
              {
                "erm\u00f6glicht den Nachhaltigkeitsanforderungen von morgen \u00f6konomisch und technisch gerecht zu werden."
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__yqM5)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__wz786)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fmuY
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                    : "Impact Intelligence steht f\u00fcr einen smarten Umgang mit technischen und sozio\u00f6konomischen Ma\u00dfnahmen, die die Zukunftsf\u00e4higkeit des Geb\u00e4udesektors vorantreiben. Unsere Smart Sustainability Roadmaps helfen Ihnen, das Potential Ihrer Assets optimal auszusch\u00f6pfen und Ihren \u00f6kologischen und sozialen Impact in der Geb\u00e4udeentwicklung zu skalieren. "}
                </div>
                <SmallButton
                  className={classNames(
                    "__wab_instance",
                    sty.smallButton___7Kbng
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uPqsL
                    )}
                  >
                    {"Services"}
                  </div>
                </SmallButton>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__kihbZ)} />

          <div className={classNames(projectcss.all, sty.freeBox__myJt4)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__a2N3
              )}
            >
              {
                "macht Ihre Projekte #gr\u00fcn / #beherrschbar / #zukunftsf\u00e4hig / #risikoarm.\n"
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__s3N)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__tnKeH)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gCnjp
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Build Systems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeits-fahrpl\u00e4ne). Hierf\u00fcr stellen wir Nachhaltigkeitsanforderungen der individuellen Projektentwicklung \u00f6konomischen Indikatoren gegen\u00fcber. Wir unterst\u00fctzen Immobilienentwickler:innen in einer fr\u00fchen Phase der Planung Investitionsentscheidungen zu treffen."
                    : "Unsere Nachhaltigkeitsfahrpl\u00e4ne unterst\u00fctzt die individuelle Projektentwicklung in einer fr\u00fchen Phase der Planung, Investitionsentscheidungen zu treffen, Projekte ganzheitlich aufzugleisen und nachhaltige Wertstabilit\u00e4t zu schaffen."}
                </div>
                <SmallButton
                  className={classNames(
                    "__wab_instance",
                    sty.smallButton___4LqCo
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nDzhi
                    )}
                  >
                    {"Projekte"}
                  </div>
                </SmallButton>
              </div>
            ) : null}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__lZfyq)} />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "buildSystemsHeadline", "cover", "menu", "img", "footer"],
  buildSystemsHeadline: ["buildSystemsHeadline"],
  cover: ["cover"],
  menu: ["menu"],
  img: ["img"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  buildSystemsHeadline: typeof BuildSystemsHeadline;
  cover: typeof Cover;
  menu: typeof Menu;
  img: typeof p.PlasmicImg;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage2__VariantsArgs;
    args?: PlasmicHomepage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage2__ArgsType,
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
          internalArgPropNames: PlasmicHomepage2__ArgProps,
          internalVariantPropNames: PlasmicHomepage2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage2";
  } else {
    func.displayName = `PlasmicHomepage2.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage2 = Object.assign(
  // Top-level PlasmicHomepage2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buildSystemsHeadline: makeNodeComponent("buildSystemsHeadline"),
    cover: makeNodeComponent("cover"),
    menu: makeNodeComponent("menu"),
    img: makeNodeComponent("img"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage2
    internalVariantProps: PlasmicHomepage2__VariantProps,
    internalArgProps: PlasmicHomepage2__ArgProps,

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

export default PlasmicHomepage2;
/* prettier-ignore-end */
