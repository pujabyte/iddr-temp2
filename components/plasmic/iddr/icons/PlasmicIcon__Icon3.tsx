// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.986 1.019l9.189 9.159-3.396 3.393-5.793-5.793-5.793 5.823-3.396-3.393 9.189-9.189zM4.399 12.605L7.764 16l-3.363 3.365L1.005 16zm11.587.002l3.394 3.363-3.395 3.395L12.59 16l3.395-3.393zm11.586-.002L30.995 16l-3.393 3.395L24.207 16zm-5.794 5.794l3.396 3.393-9.189 9.189-9.189-9.187 3.396-3.395 5.793 5.823 5.793-5.823z"
        }
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
