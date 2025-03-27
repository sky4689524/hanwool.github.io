import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const markdownContent = `
# Toward Optimal FPGA Implementation of Deep Convolutional Neural Networks for Handwritten Hangul Character Recognition

<br />

This paper presents an FPGA-based accelerator design technique for a deep convolutional neural network (DCNN) aimed at recognizing handwritten Hangul characters. The proposed design achieves a recognition time of approximately 11.9 milliseconds per character.

<br />

## 🚀 Key Features
- **FPGA-based Accelerator**: Implements a DCNN accelerator on FPGA to enhance processing speed and efficiency.
- **Handwritten Hangul Recognition**: Focuses on the unique challenges of recognizing handwritten Hangul characters.
- **Optimized Performance**: Achieves a recognition time of about 11.9 milliseconds per character, demonstrating the efficiency of the design.

<br />

## ⚙️ Technologies Used
- **Deep Convolutional Neural Networks (DCNN)**: Utilized for feature extraction and classification tasks.
- **Field Programmable Gate Arrays (FPGA)**: Serves as the hardware platform for implementing the DCNN accelerator.
- **Hardware Optimization Techniques**: Applied to enhance the performance and efficiency of the FPGA implementation.

<br />

## Purpose
The primary objective of this research is to develop an optimized FPGA-based implementation of DCNNs to enable real-time recognition of handwritten Hangul characters. By addressing the computational challenges associated with DCNNs, the study aims to contribute to the advancement of efficient hardware accelerators for complex neural network models.

<br />

---

<br />

## 📚 Publication Info
**Presented at:** Journal of Computing Science and Engineering (JCSE)  
**Link:** [JCSE](https://www.researchgate.net/publication/324412367_Toward_Optimal_FPGA_Implementation_of_Deep_Convolutional_Neural_Networks_for_Handwritten_Hangul_Character_Recognition)  

`;

export default function HandwrittenHangulRecognition() {
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
