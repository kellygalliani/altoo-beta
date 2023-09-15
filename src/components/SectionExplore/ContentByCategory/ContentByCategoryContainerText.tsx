import type { HTMLAttributes, ReactNode } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ContentByCategoryTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const ContentByCategoryContainerText = ({
  children,
  ...rest
}: ContentByCategoryTextProps) => {
  return (
    <div {...rest} className={twMerge("", rest.className)}>
      {children}
    </div>
  );
};
