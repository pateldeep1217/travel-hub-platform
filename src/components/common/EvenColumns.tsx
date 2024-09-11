import React from "react";
import styles from "./EvenColumns.module.scss";
import clsx from "clsx";

type EvenColumnsProps = {
  children: React.ReactNode;
  columns?: number;
};
function EvenColumns({ children, columns }: EvenColumnsProps) {
  return (
    <div className={clsx(styles.evenColumns, styles[`columns-${columns}`])}>
      {children}
    </div>
  );
}

export default EvenColumns;
