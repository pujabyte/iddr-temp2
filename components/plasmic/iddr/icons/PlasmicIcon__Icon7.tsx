// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 20 20"}
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
          "M18.01 0H6.877c-.54 0-.882.443-.882.982v.028c0 .55.33.99.88.99h8.553c.446 0 .668.543.353.857L.29 18.314a.988.988 0 00-.001 1.396v.001a.987.987 0 001.395 0L17.15 4.215a.497.497 0 01.85.352v8.453c0 .544.45.974.996.974h.028c.545 0 .976-.43.976-.974V2.01A2 2 0 0018.01 0"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
