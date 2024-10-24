import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "primary" | "secondary";
   children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
   const className = variant === "secondary" ? styles.secondary : styles.primary;

   return (
      <button className={`${styles.button} ${className}`} {...props}>
         {children}
      </button>
   );
};

export default Button;
