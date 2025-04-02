import markdownContent from "./FixingNextJSGithubPages";
import postsMeta from "../postsMeta.json";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { format } from "date-fns";
import { Box, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { notFound } from "next/navigation";

export default function FixingNextJSGithubPagesPage() {
  const post = postsMeta.find((p) => p.filename === "FixingNextJSGithubPages");

  if (!post) return notFound();

  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        maxWidth: "800px",
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
        lineHeight: 2,
        color: "black",
      }}
    >
      <Typography variant="h4"  sx={{ color: "black" }} gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body2"  sx={{ color: "grey" }} gutterBottom>
        {format(new Date(post.date), "yyyy-MM-dd")}
      </Typography>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ node, ...props }) => (
            <img
              {...props}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "10px",
                margin: "10px auto",
                display: "block",
              }}
              alt={props.alt}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              style={{
                paddingLeft: "1.5rem",
                marginBottom: "1rem",
              }}
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              style={{
                paddingLeft: "1.5rem",
                marginBottom: "1rem",
              }}
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li
              style={{
                marginBottom: "0.5rem",
              }}
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              style={{
                color: "#1e90ff",
              }}
              {...props}
            />
          ),
          h1: ({ node, ...props }) => (
            <h1
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
              {...props}
            />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={materialDark}
                language={match[1]}
                PreTag="div"
                customStyle={{
                  fontSize: "0.85em",
                  borderRadius: "8px",
                }}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                style={{
                  backgroundColor: "#e0e0e0",
                  color: "#333",
                  padding: "0.2em 0.4em",
                  borderRadius: "4px",
                  fontSize: "0.9em",
                  fontFamily: "monospace",
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </Box>
  );
}
