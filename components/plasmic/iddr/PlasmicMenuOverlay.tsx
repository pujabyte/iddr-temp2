// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dJqK6LEBeKixAKagJBAmzL
// Component: l7JCXcEFvGg

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
import Button2 from "../../Button2"; // plasmic-import: R7FQakg198I/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsvWlfn14Jm89In } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vWLFN14Jm89IN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_iddr.module.css"; // plasmic-import: dJqK6LEBeKixAKagJBAmzL/projectcss
import sty from "./PlasmicMenuOverlay.module.css"; // plasmic-import: l7JCXcEFvGg/css

import CloseBoldSvgrepoComsvgIcon from "./icons/PlasmicIcon__CloseBoldSvgrepoComsvg"; // plasmic-import: 3wjTpps_Fo/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: WhOp2OsiY-D/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: g3M_pomcN7I/icon

createPlasmicElementProxy;

export type PlasmicMenuOverlay__VariantMembers = {};
export type PlasmicMenuOverlay__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuOverlay__VariantsArgs;
export const PlasmicMenuOverlay__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuOverlay__ArgsType = {
  children?: React.ReactNode;
  children2?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMenuOverlay__ArgsType;
export const PlasmicMenuOverlay__ArgProps = new Array<ArgPropType>(
  "children",
  "children2",
  "slot",
  "slot2",
  "slot3",
  "slot4"
);

export type PlasmicMenuOverlay__OverridesType = {
  menuOverlay?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultMenuOverlayProps {
  children?: React.ReactNode;
  children2?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuOverlay__RenderFunc(props: {
  variants: PlasmicMenuOverlay__VariantsArgs;
  args: PlasmicMenuOverlay__ArgsType;
  overrides: PlasmicMenuOverlay__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvWlfn14Jm89In()
  });

  return (
    <div
      data-plasmic-name={"menuOverlay"}
      data-plasmic-override={overrides.menuOverlay}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.menuOverlay
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__fqk0J)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__lel3I
              )}
              component={Link}
              onClick={async event => {
                const $steps = {};

                $steps["updateStateVariable"] = true
                  ? (() => {
                      const actionArgs = {};
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        undefined;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateStateVariable"] != null &&
                  typeof $steps["updateStateVariable"] === "object" &&
                  typeof $steps["updateStateVariable"].then === "function"
                ) {
                  $steps["updateStateVariable"] = await $steps[
                    "updateStateVariable"
                  ];
                }
              }}
              platform={"nextjs"}
            >
              <CloseBoldSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg___1NQaF)}
                role={"img"}
              />
            </p.PlasmicLink>
          ),
          value: args.children
        })}
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__nVacy)}
      >
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"42px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/iddr/images/iddrLandscape1Png.png",
              fullWidth: 904,
              fullHeight: 251,
              aspectRatio: undefined
            }}
          />
        </p.PlasmicLink>
        <div className={classNames(projectcss.all, sty.freeBox__chQjf)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button2
                className={classNames("__wab_instance", sty.button2__dzebk)}
                color={"clear"}
                endIcon={
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg__x5Spj)}
                    role={"img"}
                  />
                }
                link={"#home"}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateStateVariable"] = true
                    ? (() => {
                        const actionArgs = {};
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;
                          undefined;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateStateVariable"] != null &&
                    typeof $steps["updateStateVariable"] === "object" &&
                    typeof $steps["updateStateVariable"].then === "function"
                  ) {
                    $steps["updateStateVariable"] = await $steps[
                      "updateStateVariable"
                    ];
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__tU4D)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x3AX1
                  )}
                >
                  {"Beranda"}
                </div>
              </Button2>
            ),
            value: args.slot
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__r4V2Z)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button2
                className={classNames("__wab_instance", sty.button2__jaKj)}
                color={"clear"}
                endIcon={
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg__gi9Bv)}
                    role={"img"}
                  />
                }
                link={"#about"}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__a7Iw)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__eXkhb
                  )}
                >
                  {"Tentang"}
                </div>
              </Button2>
            ),
            value: args.slot2
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__i7A6U)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button2
                className={classNames("__wab_instance", sty.button2___2JGd9)}
                color={"clear"}
                endIcon={
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg__kpHwz)}
                    role={"img"}
                  />
                }
                link={"#team"}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__xDm8R)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___67P2I
                  )}
                >
                  {"Tim"}
                </div>
              </Button2>
            ),
            value: args.slot3
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__uOhaw)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button2
                className={classNames("__wab_instance", sty.button2__ceWw6)}
                color={"clear"}
                endIcon={
                  <Icon38Icon
                    className={classNames(projectcss.all, sty.svg__nXbiL)}
                    role={"img"}
                  />
                }
                link={"#contact"}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__eLa7H)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zc9HC
                  )}
                >
                  {"Kontak"}
                </div>
              </Button2>
            ),
            value: args.slot4
          })}
        </div>
      </p.Stack>
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
        <div className={classNames(projectcss.all, sty.freeBox__nYnIb)}>
          {(hasVariant(globalVariants, "screen", "mobileOnly") ? false : true)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__cKfix
                    )}
                    component={Link}
                    onClick={async event => {
                      const $steps = {};

                      $steps["updateStateVariable"] = true
                        ? (() => {
                            const actionArgs = {};
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;
                              undefined;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateStateVariable"] != null &&
                        typeof $steps["updateStateVariable"] === "object" &&
                        typeof $steps["updateStateVariable"].then === "function"
                      ) {
                        $steps["updateStateVariable"] = await $steps[
                          "updateStateVariable"
                        ];
                      }
                    }}
                    platform={"nextjs"}
                  >
                    <CloseBoldSvgrepoComsvgIcon
                      className={classNames(projectcss.all, sty.svg__zje8J)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                ),
                value: args.children2
              })
            : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  menuOverlay: ["menuOverlay", "link", "img"],
  link: ["link", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  menuOverlay: "div";
  link: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuOverlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuOverlay__VariantsArgs;
    args?: PlasmicMenuOverlay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuOverlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuOverlay__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenuOverlay__ArgProps,
          internalVariantPropNames: PlasmicMenuOverlay__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuOverlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "menuOverlay") {
    func.displayName = "PlasmicMenuOverlay";
  } else {
    func.displayName = `PlasmicMenuOverlay.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuOverlay = Object.assign(
  // Top-level PlasmicMenuOverlay renders the root element
  makeNodeComponent("menuOverlay"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicMenuOverlay
    internalVariantProps: PlasmicMenuOverlay__VariantProps,
    internalArgProps: PlasmicMenuOverlay__ArgProps
  }
);

export default PlasmicMenuOverlay;
/* prettier-ignore-end */
