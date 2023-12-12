// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
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
        d={
          "M21.479 6.964c.015.21.015.42.015.632 0 6.457-4.917 13.905-13.906 13.905v-.004a13.835 13.835 0 01-7.491-2.19 9.814 9.814 0 007.233-2.025 4.893 4.893 0 01-4.566-3.395 4.872 4.872 0 002.206-.084 4.888 4.888 0 01-3.92-4.79V8.95c.68.379 1.44.589 2.218.612a4.893 4.893 0 01-1.513-6.525 13.871 13.871 0 0010.073 5.105 4.892 4.892 0 018.328-4.457 9.807 9.807 0 003.104-1.186A4.906 4.906 0 0121.11 5.2a9.719 9.719 0 002.807-.769 9.927 9.927 0 01-2.44 2.532z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
