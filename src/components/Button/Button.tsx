import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode; // Explicitly declare children
};

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  const className = `${styles.button} ${styles[`button--${variant}`]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
