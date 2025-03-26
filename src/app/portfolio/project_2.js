import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const markdownContent = `
# Perfect Shapes – A Cross-Platform Drawing Challenge

![Perfect Shapes Screenshot](/projects/project_2.png)

## Introduction

### Perfect Shapes – A Cross-Platform Drawing Challenge

**Project Overview:**  
Perfect Shapes is a mobile app I developed for iOS and Android using Flutter, designed to combine precision and creativity in a drawing challenge. The app features both single-player and offline multiplayer modes, allowing users to practice their drawing skills solo or take turns competing with friends on the same device.

**Development Highlights:**

- **Cross-Platform Development:** Utilizing Flutter, I built Perfect Shapes from a single codebase to ensure a consistent experience across iOS and Android platforms, demonstrating my skills in cross-platform mobile development.
- **Game Modes:** Implemented various game modes, including Trace Mode for structured practice and Free Draw Mode for creative expression, tailored to enhance user engagement and skill development.
- **Offline Multiplayer:** Designed an offline multiplayer feature that supports up to 10 players on the same device, allowing users to take turns in a drawing competition without the need for network connectivity.
- **Focus on UI/UX:** Prioritized a clean, intuitive design to provide a smooth user experience, combining functionality with an appealing visual style.

**Technical Stack:**

- **Framework:** Flutter  
- **Languages:** Dart  
- **Platforms:** iOS and Android

**Learning and Growth:**  
Developing Perfect Shapes enabled me to expand my expertise in Flutter, particularly in managing app state, animations, and optimizing performance for cross-platform functionality. The project also challenged me to design a user-friendly interface and integrate offline multiplayer capabilities, reflecting my focus on both technical precision and creative user engagement.

Perfect Shapes showcases my ability to develop innovative applications that blend technical skills with a strong emphasis on user experience. I continue to refine the app with updates and new features, underscoring my commitment to growth and excellence in software engineering.

**Game Video:**  
<div style="text-align: center">
  <iframe 
    src="https://drive.google.com/file/d/1-P1Ht1JEz3LxkiGvH0GLtf2t5VleLGfF/preview" 
    width="100%" 
    height="480" 
    style="max-width: 640px; border-radius: 12px;" 
    allow="autoplay">
  </iframe>
</div>

**App Link:**  
[iOS](https://apps.apple.com/us/app/perfect-shapes-game/id6569262195) | [Android](https://play.google.com/store/apps/details?id=com.chappmaster.shape_accuracy)

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
