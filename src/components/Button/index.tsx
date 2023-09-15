import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(
        "rounded-md border-2 duration-300 font-semibold py-3 sm:max-w-md",
        rest.className
      )}>
      {children}
    </button>
  );
};

export default Button;
