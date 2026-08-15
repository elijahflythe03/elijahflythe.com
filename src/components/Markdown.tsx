import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import type { ImgHTMLAttributes } from "react";

function MarkdownImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} loading="lazy" decoding="async" alt={props.alt ?? ""} />;
}

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="prose-writeup">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{ img: MarkdownImage }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
