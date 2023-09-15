import React from "react";
import type { LiHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ContentByCategoryApplicationProps extends LiHTMLAttributes<HTMLLIElement> {
  Application: string;
  Icon: string;
}

export const ContentByCategoryApplication = ({
  Application,
  ...rest
}: ContentByCategoryApplicationProps) => {
  return (
    <li {...rest} className={twMerge("", rest.className)}>
      {Application}
    </li>
  );
};
