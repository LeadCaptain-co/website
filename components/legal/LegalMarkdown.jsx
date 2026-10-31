import React from "react";
import ReactMarkdown from "react-markdown";

const components = {
  h2: ({ children }) => <h2 className="mt-12 font-heading font-bold text-2xl text-[#00D4FF]">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8 font-heading font-bold text-xl text-white">{children}</h3>,
  p: ({ children }) => <p className="mt-4 text-[18px] leading-[1.8] text-[#E0F2F7]/75">{children}</p>,
  strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
  a: ({ href, children }) => <a href={href} className="text-[#00D4FF] hover:underline">{children}</a>,
  hr: () => <hr className="my-14 border-white/10" />,
};

export default function LegalMarkdown({ content }) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}