import { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   type: "primary" | "secondary" | "tertiary";
   size: "sm" | "md" | "lg" | "xl" | "xxl";
   children: React.ReactNode;
   className?: string;
}

const Button: FC<ButtonProps> = ({ type, size, children, className = "", onClick, ...rest }) => {
   const buttonClass = `${styles.button} ${styles[type]} ${styles[size]} ${className}`.trim();

   return (
      <button onClick={onClick} className={buttonClass} {...rest}>
         {children}
      </button>
   );
};

export default Button;
