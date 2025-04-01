import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Typography } from "@mui/material";

const markdownContent = `
![TranscribeTube Screenshot](/projects/project_3.png)


## Introduction

### TranscribeTube

TranscribeTube is a Python-based tool I developed to simplify the transcription and subtitle generation process for videos, accommodating both local files and YouTube links. By leveraging advanced models from Hugging Face for speaker diarization and automatic speech recognition, TranscribeTube provides highly accurate transcriptions in various languages.

As someone learning new languages, I use TranscribeTube to transcribe and create subtitles for videos, enhancing my understanding of spoken content in my target languages. The tool features an intuitive Gradio web interface, allowing me to easily upload videos, select transcription languages, and download subtitles in SRT format, making it a valuable resource for my language learning journey.



## 🎬 Demo


This GIF demonstrates how easy it is to use TranscribeTube to transcribe and generate subtitles for videos.

<br />

<div style="text-align: center">
  <img 
    src="https://github.com/sky4689524/TranscribeTube/blob/main/images/TranscribeTubeDemo.gif?raw=true" 
    alt="TranscribeTube Demo"
    style="max-width: 100%; border-radius: 10px;"
  />
</div>

<br />

---



## Implementation

TranscribeTube utilizes a combination of powerful technologies to provide a seamless transcription experience:

<br />

- **Interactive Interface with Gradio**:  
  The tool employs Gradio to offer a user-friendly web interface, allowing users to upload local video files or input YouTube links directly for transcription.

- **Hugging Face Models**:  
  For precise transcriptions and speaker identification, TranscribeTube uses models like \`pyannote/speaker-diarization-3.1\` for speaker diarization and \`Whisper-v3\` for automatic speech recognition. Users need to obtain API access tokens for these models, ensuring they have permission to utilize them directly from Hugging Face's servers.

- **Subtitle Generation**:  
  Subtitles are generated in the SRT format, compatible with most media players and editing software. The tool handles both local video files and YouTube downloads facilitated by \`yt_dlp\`.

To get started with TranscribeTube, users can clone the repository, install dependencies, and configure their Hugging Face API tokens in the \`config.yaml\` file. The main transcription script can be run to launch the Gradio interface, where users can upload videos, select languages, and manage their transcriptions.



---

## Troubleshooting


- **Real-Time Progress Hook with Gradio**:  
  Integrating real-time progress updates into the Gradio interface was challenging, especially when connecting the speaker diarization process to the Gradio progress bar. To solve this, I created a custom hook class that links the diarization model's progress with Gradio, allowing the interface to display updates in real time. This required a deep understanding of the model's processing flow and careful implementation to synchronize the progress accurately with the Gradio interface.

- **Audio Segmentation and Correct Chunk Splitting**:  
  Achieving accurate audio segmentation and chunk splitting was a complex task. Utilizing the Pyannote speaker diarization model proved helpful in managing the segmentation, but ensuring these segments correctly aligned with the subtitle timelines required precise adjustments.
`;

export default function Project3() {
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
        TranscribeTube – AI-Powered Subtitle Generator
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
