import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   variant?: "primary" | "secondary";
   inputSize?: "sm" | "md";
   className?: string;
}
const Input: FC<InputProps> = ({ onChange, value, variant = "", inputSize = "", className = "", ...rest }) => {
   const InputClass = `${styles.input} ${styles[variant]} ${styles[inputSize]} ${className}`.trim();

   return <input {...rest} value={value} onChange={onChange} className={InputClass} />;
};

export default Input;
