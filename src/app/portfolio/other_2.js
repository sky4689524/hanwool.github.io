import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const markdownContent = `
# Robustification of Segmentation Models Against Adversarial Perturbations in Medical Imaging

<br />

This project explores a defense framework designed to enhance the robustness of medical image segmentation models against adversarial perturbations.

<br />

## 🚀 Key Highlights
- Introduces a **model-agnostic and attack-independent** defense framework.
- Operates **without requiring retraining** or architectural changes to the segmentation model.
- Focuses on **medical imaging applications**, particularly the segmentation of clinical scans.
- Demonstrates strong generalizability across different attacks and datasets.

<br />

## 🛡 Defense Strategy
- Converts inputs to the **frequency domain** to reveal adversarial noise patterns.
- Implements a **detection mechanism** to distinguish clean vs adversarial examples.
- Applies a **reformer module** to correct detected adversarial examples before inference.

<br />

---

<br />

## 📚 Publication Info
**Presented at:** International Workshop on PRedictive Intelligence In MEdicine (PRIME)  
**Hosted with:** MICCAI 2020  
**arXiv Link:** [2009.11090](https://arxiv.org/abs/2009.11090)
`;

export default function Robustification() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "10px",
        fontSize: "16px",
        lineHeight: "2",
      }}
    >
      <ReactMarkdown
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
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
