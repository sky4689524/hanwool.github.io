import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Typography } from "@mui/material";

const markdownContent = `
![Perfect Shapes Screenshot](/projects/project_2.png)


## Introduction


### Perfect Shapes – A Cross-Platform Drawing Challenge


**Project Overview:**  
Perfect Shapes is a mobile app I developed for iOS and Android using Flutter, designed to combine precision and creativity in a drawing challenge. The app features both single-player and offline multiplayer modes, allowing users to practice their drawing skills solo or take turns competing with friends on the same device.

<br />

**Development Highlights:**

- **Cross-Platform Development:** Utilizing Flutter, I built Perfect Shapes from a single codebase to ensure a consistent experience across iOS and Android platforms, demonstrating my skills in cross-platform mobile development.
- **Game Modes:** Implemented various game modes, including Trace Mode for structured practice and Free Draw Mode for creative expression, tailored to enhance user engagement and skill development.
- **Offline Multiplayer:** Designed an offline multiplayer feature that supports up to 10 players on the same device, allowing users to take turns in a drawing competition without the need for network connectivity.
- **Focus on UI/UX:** Prioritized a clean, intuitive design to provide a smooth user experience, combining functionality with an appealing visual style.

<br />

**Technical Stack:**

- **Framework:** Flutter  
- **Languages:** Dart  
- **Platforms:** iOS and Android

<br />

**Learning and Growth:**  
Developing Perfect Shapes enabled me to expand my expertise in Flutter, particularly in managing app state, animations, and optimizing performance for cross-platform functionality. The project also challenged me to design a user-friendly interface and integrate offline multiplayer capabilities, reflecting my focus on both technical precision and creative user engagement.

Perfect Shapes showcases my ability to develop innovative applications that blend technical skills with a strong emphasis on user experience. I continue to refine the app with updates and new features, underscoring my commitment to growth and excellence in software engineering.

<br />

**Game Video:**  

<br />

<div style="text-align: center">
  <iframe 
    src="https://drive.google.com/file/d/1-P1Ht1JEz3LxkiGvH0GLtf2t5VleLGfF/preview" 
    width="100%" 
    height="480" 
    style="max-width: 640px; border-radius: 12px;" 
    allow="autoplay">
  </iframe>
</div>

<br />

**App Link:**  
[iOS](https://apps.apple.com/us/app/perfect-shapes-game/id6569262195) | [Android](https://play.google.com/store/apps/details?id=com.chappmaster.shape_accuracy)

<br />

---


## Implementation


- **Project Setup and Framework Selection:**
    - **Framework:** Chose Flutter for its cross-platform capabilities, allowing a single codebase for both iOS and Android, which reduced development time and ensured consistent functionality across platforms.
    - **Languages:** Utilized Dart, Flutter’s programming language, for its ease of use and strong integration with the Flutter framework.

- **App Architecture:**
    - **State Management:** Used Flutter’s Provider package for state management to handle app state changes efficiently, ensuring smooth UI updates and responsiveness.

- **Core Features Implementation:**
    - **Game Modes:**
        - **Trace Mode:** Developed a feature that captures user-drawn shapes and matches them against predefined templates using image comparison techniques, allowing the app to calculate precision scores based on how closely the user's drawing matches the target shape.
        - **Free Draw Mode:** Implemented a freeform drawing canvas using Flutter’s custom painter and mathematical libraries to analyze user input, providing real-time feedback on drawing accuracy based on shape precision and deviation calculations.
    - **Offline Multiplayer:**
        - Designed a turn-based system for multiplayer mode, allowing multiple players to use the same device sequentially. Stored scores and player progress locally, eliminating the need for network connectivity.

- **UI/UX Design:**
    - **Design Principles:** Focused on a minimalist, user-friendly design that is both intuitive and engaging, using Flutter’s rich set of widgets to create a responsive interface.

- **Performance Optimization:**
    - **Rendering Efficiency:** Optimized drawing performance using Flutter’s custom painter and canvas APIs to handle complex shapes and reduce lag.

- **Testing and Debugging:**
    - **Testing Strategy:** Conducted extensive testing across multiple physical devices, including an Android tablet and an iPhone, to ensure consistent behavior and performance. Additionally, used Android Studio and Xcode simulators to test the app on a variety of virtual devices with different screen sizes and specifications. Utilized Flutter’s testing framework for unit and integration tests, focusing on critical features such as shape recognition and score calculation.
    - **Bug Fixes:** Addressed performance bottlenecks and UI glitches identified during testing phases, ensuring a smooth and polished user experience upon release.

- **Deployment:**
    - **Platforms:** Deployed to both Apple App Store and Google Play Store, managing platform-specific requirements like app icons, permissions, and performance benchmarks.
    - **Continuous Improvement:** Regularly updated the app with new features and enhancements based on user feedback, manually iterating on the design and functionality to keep the app engaging and up-to-date.


---


## Troubleshooting


The development process was relatively swift, aided significantly by using GPT for coding assistance. However, the main challenge arose during the deployment phase, particularly in finding enough testers for the Android version. To address this, I needed around 20 testers, which took some time to arrange. I successfully overcame this hurdle by reaching out to communities on Reddit, where I was able to gather the necessary testers to refine and finalize the app.
`;

export default function Project2() {
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
          Perfect Shapes – A Cross-Platform Drawing Challenge
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
  