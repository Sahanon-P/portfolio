import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Document } from "@contentful/rich-text-types";

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="font-bold text-foreground">{text}</strong>
    ),
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text) => (
      <code className="font-mono text-sm bg-muted px-1 py-0.5 text-[#FF5500]">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4 last:mb-0">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_1]: (_node, children) => (
      <h1 className="font-mono text-2xl font-bold tracking-widest uppercase text-foreground mb-4">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2 className="font-mono text-xl font-bold tracking-widest uppercase text-foreground mb-3">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3 className="font-mono text-lg font-bold tracking-wide uppercase text-foreground mb-2">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <ul className="font-mono text-sm text-muted-foreground list-none space-y-2 mb-4 pl-4 border-l-2 border-[#FF5500]">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <ol className="font-mono text-sm text-muted-foreground list-decimal space-y-2 mb-4 pl-6">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node, children) => (
      <li className="before:content-['—'] before:text-[#FF5500] before:mr-2">
        {children}
      </li>
    ),
    [BLOCKS.QUOTE]: (_node, children) => (
      <blockquote className="font-mono text-sm italic border-l-4 border-[#FF5500] pl-4 text-muted-foreground mb-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="border-border my-6" />,
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[#FF5500] underline underline-offset-2 hover:opacity-70 transition-opacity"
      >
        {children}
      </a>
    ),
  },
};

interface RichTextRendererProps {
  document: Document;
}

export function RichTextRenderer({ document }: RichTextRendererProps) {
  return (
    <div className="rich-text">
      {documentToReactComponents(document, options)}
    </div>
  );
}
