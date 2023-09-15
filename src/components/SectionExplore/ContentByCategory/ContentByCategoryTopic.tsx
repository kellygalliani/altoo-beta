import React from "react";
import type { LiHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ContentByCategoryTopicProps extends LiHTMLAttributes<HTMLLIElement> {
  topic: string;
}

export const ContentByCategoryTopic = ({ topic, ...rest }: ContentByCategoryTopicProps) => {
  return (
    <li {...rest} className={twMerge("", rest.className)}>
      {topic}
    </li>
  );
};
