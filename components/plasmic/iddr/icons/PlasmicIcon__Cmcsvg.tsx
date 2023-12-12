// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CmcsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CmcsvgIcon(props: CmcsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 578 586"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M502.4 350.2c-9.3 6.4-21.4 7.2-31.5 2.1-11.6-6.6-17.9-22-17.9-42.9v-64.3c0-30.9-12.2-52.8-32.7-58.8-34.5-10.1-60.3 32.2-70.2 48.1L289 333.3V212.6c-.7-27.8-9.7-44.5-26.9-49.5-11.3-3.3-28.3-2-44.8 23.2L80.7 405.6C62.5 370.9 53 332.2 53.2 293 53.2 160.8 158.8 53.3 289 53.3c130.2 0 236.1 107.5 236.1 239.7v1.4c1.3 25.5-7 45.9-22.7 55.8zm75.5-57.2v-1.3C576.8 130.7 447.6 0 289 0 130.4 0 .4 131.4.4 293S129.8 586 289 586c73 0 143.2-28 196.2-78.2 10.7-10.1 11.3-26.9 1.4-37.7-9.6-10.6-25.9-11.4-36.6-1.8l-.1.1c-93.5 88.7-241.2 84.8-329.9-8.7-2.2-2.3-4.3-4.6-6.4-7L236.5 255v91.2c0 43.8 17 58 31.2 62.2 14.2 4.2 36.1 1.3 58.9-35.8l68-110c2.1-3.5 4.1-6.6 6-9.2v55.9c0 41 16.4 73.7 45.3 89.9 26.7 14.4 59.1 13.1 84.6-3.4 31.7-20.6 49-57.9 47.2-102.8h.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CmcsvgIcon;
/* prettier-ignore-end */
