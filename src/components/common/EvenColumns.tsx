import styles from "./EvenColumns.module.scss";
import clsx from "clsx";

type EvenColumnsProps = {
  children: React.ReactNode;
  columns?: number;
  className?: string;
};
function EvenColumns({ children, columns, className }: EvenColumnsProps) {
  return (
    <div
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
