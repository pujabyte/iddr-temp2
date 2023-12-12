// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GoogleDocsSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GoogleDocsSvgrepoComsvgIcon(
  props: GoogleDocsSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 192 192"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={"M68 89h56m-56 24h56m-56 24h36"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M52 28a2 2 0 00-2 2v132a2 2 0 002 2h88a2 2 0 002-2V62h-28a6 6 0 01-6-6V28H52zm68 8.485L133.515 50H120V36.485zM38 30c0-7.732 6.268-14 14-14h62c1.591 0 3.117.632 4.243 1.757l34 34A6 6 0 01154 56v106c0 7.732-6.268 14-14 14H52c-7.732 0-14-6.268-14-14V30z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default GoogleDocsSvgrepoComsvgIcon;
/* prettier-ignore-end */
