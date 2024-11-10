import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
   type: "primary" | "secondary" | "tertiary";
   size: "sm" | "md" | "lg" | "xl" | "xxl";
   children: React.ReactNode;
   className?: string;
}

const Button: FC<ButtonProps> = ({ type, size, children, className }) => {
   const buttonClass = `${styles.button} ${styles[type]} ${styles[size]} ${className || ""}`;

   return <button className={buttonClass}>{children}</button>;
};

export default Button;
