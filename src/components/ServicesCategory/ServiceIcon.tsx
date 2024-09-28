import React, { FC, ReactNode } from "react";
import styles from "./ServicesCategory.module.scss";

import clsx from "clsx";

interface ServiceIconProps {
  Icon: FC<React.SVGProps<SVGSVGElement>>; // This type ensures Icon is an SVG component
  afterStyles?: string; // Optional class name for custom afterStyles
}
function ServiceIcon({ Icon, afterStyles }: ServiceIconProps) {
  return (
    <div className={styles.serviceIconWrapper}>
      <div className={clsx(styles.serviceIcon, afterStyles)}>
        <Icon />
      </div>
    </div>
  );
}

export default ServiceIcon;
