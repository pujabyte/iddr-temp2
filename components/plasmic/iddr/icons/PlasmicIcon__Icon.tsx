// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
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
          "M22.703 4.917c-.339 3.121-.922 6.53-1.505 9.94-.255 1.486-.496 2.976-.825 4.443-.402 1.788-1.358 2.205-2.898 1.22-2.105-1.348-4.165-2.766-6.213-4.196-1.054-.737-1.098-1.324-.182-2.22 1.75-1.71 3.544-3.378 5.31-5.072.3-.288.574-.602.85-.912.128-.145.203-.327.069-.496-.135-.17-.336-.132-.5-.038-.316.18-.626.37-.93.571-2.406 1.6-4.827 3.18-7.205 4.82-1.22.844-2.462 1.17-3.898.665-.957-.335-1.941-.586-2.901-.909-.386-.129-.828-.276-.872-.784-.044-.546.386-.762.784-.938 2.142-.953 4.281-1.92 6.442-2.826 3.519-1.474 7.054-2.91 10.585-4.346a20.05 20.05 0 012.067-.706c1.395-.389 1.913.038 1.816 1.788l.006-.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
