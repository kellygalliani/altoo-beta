import type { ReactNode, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ContentByCategoryRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ContentByCategoryRoot = ({ children, ...rest }: ContentByCategoryRootProps) => {
  return (
    <div {...rest} className={twMerge("", rest.className)}>
      {children}
    </div>
  );
};
