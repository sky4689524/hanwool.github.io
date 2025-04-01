import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Typography } from "@mui/material";

const markdownContent = `
This project explores a defense framework designed to enhance the robustness of medical image segmentation models against adversarial perturbations.

## 🚀 Key Highlights
- Introduces a **model-agnostic and attack-independent** defense framework.
- Operates **without requiring retraining** or architectural changes to the segmentation model.
- Focuses on **medical imaging applications**, particularly the segmentation of clinical scans.
- Demonstrates strong generalizability across different attacks and datasets.

## 🛡 Defense Strategy
- Converts inputs to the **frequency domain** to reveal adversarial noise patterns.
- Implements a **detection mechanism** to distinguish clean vs adversarial examples.
- Applies a **reformer module** to correct detected adversarial examples before inference.

---

## 📚 Publication Info
**Presented at:** International Workshop on PRedictive Intelligence In MEdicine (PRIME)  
**Hosted with:** MICCAI 2020  
**arXiv Link:** [2009.11090](https://arxiv.org/abs/2009.11090)
`;

export default function Robustification() {
  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        maxWidth: "800px",
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
        lineHeight: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "2rem" }}
        gutterBottom
      >
        Robustification of Segmentation Models Against Adversarial Perturbations
        in Medical Imaging
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
