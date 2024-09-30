import React from "react";
import styles from "./EvenColumns.module.scss";
import clsx from "clsx";

type EvenColumnsProps = {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
};
function EvenColumns({ children, columns, className, gap }: EvenColumnsProps) {
  return (
    <div
      style={{ "--grid-gap": gap } as React.CSSProperties}
      className={clsx(
        styles.evenColumns,
        styles[`columns-${columns}`],
        className
      )}
    >
      {children}
    </div>
  );
}

export default EvenColumns;
