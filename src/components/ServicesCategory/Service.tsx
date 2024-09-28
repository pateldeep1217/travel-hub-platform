import React, { FC } from "react";
import styles from "./ServicesCategory.module.scss";
import ServiceIcon from "./ServiceIcon";

type ServiceProps = {
  Icon: FC<React.SVGProps<SVGSVGElement>>; // Type for the SVG component
  afterStyles?: string; // Optional class name for custom afterStyles
  title: string; // Title of the service
  description: string; // Description of the service
};
// Reusable Service Component
const Service = ({ Icon, afterStyles, title, description }: ServiceProps) => {
  return (
    <div className={styles.service}>
      <ServiceIcon Icon={Icon} afterStyles={afterStyles} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceParagraph}>{description}</p>
    </div>
  );
};

export default Service;
