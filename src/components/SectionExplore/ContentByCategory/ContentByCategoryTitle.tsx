import React from "react";
import type { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";

interface ContentByCategoryTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export const ContentByCategoryTitle = ({ title, ...rest }: ContentByCategoryTitleProps) => {
  return <h2 {...rest} className={twMerge("text-xl", rest.className)}>{title}</h2>;
};
