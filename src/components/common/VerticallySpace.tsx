import React, { CSSProperties } from "react";
import styles from "./VerticallySpace.module.scss";

type CustomCSSProperties = CSSProperties & {
  "--flow-spacer"?: string;
};
type VerticallySpaceProps = {
  children: React.ReactNode;
  gap?: string;
};

function VerticallySpace({ children, gap }: VerticallySpaceProps) {
  const style: CustomCSSProperties = {
    "--flow-spacer": gap || "1em",
  };
  return (
    <div className={styles.flow} style={style}>
      {children}
    </div>
  );
}

export default VerticallySpace;
