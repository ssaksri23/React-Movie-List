import React from "react";

export default function Title({ level, title, original_title }) {
  const Tag = `h${level}`;

  return (
    <Tag className={`${title ? "text-2xl font-bold" : "text-base"}`}>
      {title ? title : original_title}
    </Tag>
  );
}
