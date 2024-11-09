import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
   type: "brand" | "secondaryGray" | "brandReduce" | "tertiaryGray";
   size: "sm" | "md" | "lg" | "xl" | "xxl";
   children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ type, size, children }) => {
   const buttonClass = `${styles.button} ${styles[type]} ${styles[size]}`;

   return <button className={buttonClass}>{children}</button>;
};
export default Button;
