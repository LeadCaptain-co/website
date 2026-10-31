import React from "react";
import ReactMarkdown from "react-markdown";

const components = {
  h2: ({ children }) => <h2 className="mt-12 font-heading font-bold text-2xl text-[#00D4FF]">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8 font-heading font-bold text-xl text-white">{children}</h3>,
  p: ({ children }) => <p className="mt-4 text-[18px] leading-[1.9] text-[#E0F2F7]/80">{children}</p>,
  strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
  a: ({ href, children }) => <a href={href} className="text-[#00D4FF] hover:underline">{children}</a>,
  ul: ({ children }) => <ul className="mt-4 list-disc pr-6 space-y-2 text-[18px] leading-[1.8] text-[#E0F2F7]/80">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal pr-6 space-y-2 text-[18px] leading-[1.8] text-[#E0F2F7]/80">{children}</ol>,
  blockquote: ({ children }) => <blockquote className="mt-6 border-r-4 border-[#00D4FF]/60 pr-5 text-[#E0F2F7]/70 italic">{children}</blockquote>,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ""} loading="lazy" className="mt-6 w-full rounded-2xl border border-white/10" />
  ),
  code: ({ children }) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-[15px] text-[#00D4FF]" dir="ltr">{children}</code>,
  hr: () => <hr className="my-12 border-white/10" />,
};

export default function PostMarkdown({ content }) {
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
