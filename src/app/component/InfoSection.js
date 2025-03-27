import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";

export default function InfoSection() {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    "I am a Machine Learning Engineer & Full-Stack Developer with expertise in AI-driven solutions, software development, and mobile app innovation...";

  const fullText =
    "I am a Machine Learning Engineer & Full-Stack Developer specializing in AI, Deep Learning, and Full-Stack Web & Mobile Development. With a Master's degree in Informatics from TUM, I have worked on cutting-edge AI applications, web application, and scalable software architectures. My expertise spans supervised and unsupervised learning, deep neural networks, NLP, and real-time data processing. I build scalable applications using React, Next.js, Flask, and FastAPI, and develop cross-platform mobile apps with Flutter. I have successfully deployed and published mobile apps on iOS and Android, integrating cloud services, optimizing UI/UX, and ensuring seamless API interactions. Passionate about research, I have contributed to AI-powered automation, real-time inference systems, and innovative EdTech solutions. I thrive in building impactful AI solutions and collaborating on innovative projects.";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#131313",
        color: "white",
        padding: "40px",
        position: "relative",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          ml: { xs: 0, sm: 2, md: 1 }, 
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: "Poppins, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "2px",
            lineHeight: 1.4,
          }}
        >
          SOFTWARE INNOVATOR & LIFELONG LEARNER
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 100,
          }}
        >
          {expanded ? fullText : shortText}
        </Typography>

        <Button
          onClick={() => setExpanded(!expanded)}
          sx={{
            color: "white",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderBottom: "2px solid white",
            width: "fit-content",
            paddingBottom: "5px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Box>
    </Box>
  );
}
