// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 21a9 9 0 100-18 9 9 0 000 18zm3.782-7.786c.19.105.44.089.652-.043.327-.203.5-.62.474-1.144v-.019L16.907 12a4.914 4.914 0 00-4.908-4.91A4.914 4.914 0 007.09 12a4.879 4.879 0 00.577 2.307l2.84-4.494c.344-.517.696-.544.932-.476.357.103.545.444.559 1.013v2.476l1.268-2.026c.204-.326.744-1.192 1.463-.985.424.121.677.57.677 1.203v1.31c0 .437.133.751.375.886zm2.215-1.228V12c.038.92-.32 1.683-.986 2.097-.55.341-1.223.368-1.759.07-.594-.33-.935-1-.935-1.84V11.19a4.21 4.21 0 00-.125.19l-1.41 2.25c-.475.761-.928.819-1.224.734-.296-.085-.65-.375-.65-1.272v-1.868l-2.561 4.052a4.896 4.896 0 003.652 1.634 4.891 4.891 0 003.337-1.309.544.544 0 11.741.8 5.978 5.978 0 01-4.078 1.6A6.006 6.006 0 016 12c0-3.308 2.691-6 5.998-6a6.006 6.006 0 015.999 5.973v.013z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
