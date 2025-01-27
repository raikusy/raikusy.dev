"use client";

import ReactMarkdown, { type Options } from "react-markdown";
import remarkGfm from "remark-gfm";

export function Markdown({
  children,
  options,
}: {
  children: string;
  options?: Options;
}) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} {...options}>
      {children}
    </ReactMarkdown>
  );
}
