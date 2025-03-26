import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const markdownContent = `
# Interpreter App

![Interpreter Screenshot](/projects/project_1.png)

## Introduction

### Interpreter – Your Live Translation Companion

**Project Overview:**  
Interpreter is a live translation app developed using Flutter, designed to bridge language barriers by supporting all languages through GPT-4. The app aims to help people communicate seamlessly across different languages, offering both text and voice recognition features. Translations are provided in real-time, displayed on-screen and spoken aloud, making it ideal for dynamic conversational use.

**Key Features:**

- **Multilingual Support:** Powered by GPT-4, Interpreter supports all major languages, facilitating effective communication across language boundaries.
- **Text and Voice Input:** Users can enter text manually or use voice recognition, providing flexibility in various interaction scenarios.
- **Dual Output:** Translations are presented on-screen and through voice output, catering to both visual and auditory preferences.
- **User-Friendly Interface:** Designed with a simple and intuitive UI for ease of use, making the app accessible to all users.
- **API Integration:** Uses OpenAI’s API for accurate and efficient language processing, leveraging state-of-the-art AI technology.

**Development Highlights:**

- **Cross-Platform Development:** Built with Flutter to ensure compatibility and consistent performance on both Android and iOS platforms.
- **Voice and Text Processing:** Integrated advanced voice recognition and text processing capabilities to deliver real-time, accurate translations during live interactions.

**Purpose and Impact:**  
Interpreter is designed to make communication across different languages more accessible and straightforward, helping individuals understand and connect effortlessly. Whether for travel, work, or everyday conversations, Interpreter provides a practical solution for breaking down language barriers.

## App Video

<div style="text-align: center">
  <iframe 
    src="https://drive.google.com/file/d/1ohIeMEu1rfjIPKDlHy9hU96Acafq1eCD/preview" 
    width="100%" 
    height="480" 
    style="max-width: 640px; border-radius: 12px;" 
    allow="autoplay">
  </iframe>
</div>

---

## Implementation

**Integration with OpenAI Models:**  
Interpreter utilizes a combination of OpenAI models to achieve seamless speech-to-speech translation, overcoming the lack of a fully integrated solution by chaining specific models for each task:

1. **Speech Recognition with Whisper-1:**  
   I used OpenAI’s Whisper-1 model for speech recognition, which accurately transcribes spoken input into text. This model provides high accuracy in capturing spoken language, making it ideal for the initial step in the translation pipeline.

2. **Text Translation with GPT-4o:**  
   The transcribed text is then processed using GPT-4o for translation. This model allows for nuanced and contextually accurate translations across a wide range of languages, leveraging GPT-4o’s advanced language understanding capabilities.

3. **Speech Synthesis with TTS-1:**  
   For converting the translated text back into speech, I integrated OpenAI’s TTS-1 model. This text-to-speech model provides clear and natural-sounding audio, completing the speech-to-speech translation loop and enabling users to hear the translation aloud.

**Optimization of Process Time:**  
To ensure a smooth and responsive user experience, I focused on optimizing the entire process flow:

- **Minimizing Latency:** Carefully managed the data flow between Whisper-1, GPT-4, and TTS-1 models, optimizing transitions and minimizing latency to deliver near real-time results.

**Cross-Platform Development:**  
Built with Flutter, the app is designed to function consistently across both Android and iOS platforms. The implementation was thoroughly tested on a variety of devices and simulators using Android Studio and Xcode to ensure optimal performance and responsiveness.

**Outcome:**  
By integrating Whisper-1 for speech recognition, GPT-4 for translation, and TTS-1 for speech synthesis, Interpreter effectively delivers a comprehensive speech-to-speech translation experience. This implementation demonstrates my ability to creatively utilize and optimize multiple OpenAI models, providing a practical solution that addresses language barriers with advanced AI capabilities.

---

## Troubleshooting

Integrating the entire speech-to-speech translation process using APIs was generally straightforward, but coordinating them into a cohesive workflow presented some challenges. Each API call for speech recognition, translation, and text-to-speech synthesis functioned reliably on its own, but bringing them together required careful management to ensure that each step flowed correctly and efficiently. This included crafting accurate prompts and managing data flow between APIs to maintain the integrity of the translation process.

Moreover, the use of high-quality models via these APIs incurred significant costs, making the approach impractical for large-scale production. While the system performed well in a testing environment, the expense of relying on advanced APIs like Whisper-1, GPT-4, and TTS-1 highlighted the need for further optimization or alternative strategies to reduce costs for real-world deployment.
`;

export default function Project1() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "10px",
        fontSize: "14px",
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
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
}
