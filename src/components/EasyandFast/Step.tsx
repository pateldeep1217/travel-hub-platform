import { ReactNode } from "react";
import styles from "./Step.module.scss";

type stepProps = {
  Icon: ReactNode;
  title: string;
  description: string;
};

function Step({ Icon, title, description }: stepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.icon}>{Icon}</div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Step;
