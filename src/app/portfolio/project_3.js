import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const markdownContent = `
# TranscribeTube – AI-Powered Subtitle Generator

<br />

![TranscribeTube Screenshot](/projects/project_3.png)

<br />

## Introduction

<br />

### TranscribeTube

TranscribeTube is a Python-based tool I developed to simplify the transcription and subtitle generation process for videos, accommodating both local files and YouTube links. By leveraging advanced models from Hugging Face for speaker diarization and automatic speech recognition, TranscribeTube provides highly accurate transcriptions in various languages.

As someone learning new languages, I use TranscribeTube to transcribe and create subtitles for videos, enhancing my understanding of spoken content in my target languages. The tool features an intuitive Gradio web interface, allowing me to easily upload videos, select transcription languages, and download subtitles in SRT format, making it a valuable resource for my language learning journey.

<br />

## 🎬 Demo

<br />

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

<br />

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

<br />

---

<br />

## Troubleshooting

<br />

- **Real-Time Progress Hook with Gradio**:  
  Integrating real-time progress updates into the Gradio interface was challenging, especially when connecting the speaker diarization process to the Gradio progress bar. To solve this, I created a custom hook class that links the diarization model's progress with Gradio, allowing the interface to display updates in real time. This required a deep understanding of the model's processing flow and careful implementation to synchronize the progress accurately with the Gradio interface.

- **Audio Segmentation and Correct Chunk Splitting**:  
  Achieving accurate audio segmentation and chunk splitting was a complex task. Utilizing the Pyannote speaker diarization model proved helpful in managing the segmentation, but ensuring these segments correctly aligned with the subtitle timelines required precise adjustments.
`;

export default function Project3() {
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
