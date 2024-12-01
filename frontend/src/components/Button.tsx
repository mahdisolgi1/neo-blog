import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
   type: "primary" | "secondary" | "tertiary";
   size: "sm" | "md" | "lg" | "xl" | "xxl";
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
   [key: string]: any;
}

const Button: FC<ButtonProps> = ({ type, size, children, className, onClick, ...rest }) => {
   const buttonClass = `${styles.button} ${styles[type]} ${styles[size]} ${className || ""}`;

   return (
      <button onClick={onClick} className={buttonClass} {...rest}>
         {children}
      </button>
   );
};

export default Button;
