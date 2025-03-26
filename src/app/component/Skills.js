import { Box, Typography, Grid2 } from "@mui/material";
import poppins from "../utils/poppinsFont";

const skills = {
  languages: [
    { name: "Python", src: "/icons/python.png" },
    { name: "Java", src: "/icons/java.png" },
    { name: "JavaScript", src: "/icons/javascript.png" },
    { name: "Dart", src: "/icons/dart.png" },
    { name: "C++", src: "/icons/cpp.png" },
  ],
  frameworks: [
    { name: "ReactJS", src: "/icons/react.png" },
    { name: "NextJS", src: "/icons/nextjs.png" },
    { name: "PyTorch", src: "/icons/pytorch.png" },
    { name: "TensorFlow", src: "/icons/tensorflow.png" },
    { name: "Flutter", src: "/icons/flutter.png" },
    { name: "Flask", src: "/icons/flask.png" },
    { name: "FastAPI", src: "/icons/fastapi.png" },
  ],
  devops: [
    { name: "Docker", src: "/icons/docker.png" },
    { name: "AWS", src: "/icons/aws.png" },
    { name: "GCP", src: "/icons/gcp.png" },
  ],
  versionControl: [
    { name: "Git", src: "/icons/git.png" },
    { name: "GitHub", src: "/icons/github.png" },
    { name: "GitLab", src: "/icons/gitlab.png" },
  ],
  collaboration: [
    { name: "Notion", src: "/icons/notion.png" },
    { name: "Slack", src: "/icons/slack.png" },
    { name: "Jira", src: "/icons/jira.png" },
    { name: "ClickUp", src: "/icons/clickup.png" },
    { name: "Figma", src: "/icons/figma.png" },
    { name: "Miro", src: "/icons/miro.png" },
  ],
  spokenLanguages: [
    { name: "Korean (Native)", src: "/icons/korean.png" },
    { name: "English (C1/C2)", src: "/icons/english.png" },
    { name: "German (B2/C1)", src: "/icons/german.png" },
  ],
  learning: [
    { name: "TypeScript", src: "/icons/typescript.png" },
    { name: "C#", src: "/icons/csharp.png" },
    { name: "Django", src: "/icons/django.png" },
    { name: "C", src: "/icons/c.png" },
  ],
};

export default function Skills() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f7f7f7, #e3e3e3)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          border: "2px solid black",
          padding: "10px 30px",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: poppins.style.fontFamily,
          }}
        >
          SKILLS
        </Typography>
      </Box>

      {/* Skills Categories */}
      {[
        { title: "Languages", skills: skills.languages },
        { title: "Frameworks & Libraries", skills: skills.frameworks },
        { title: "Infrastructure & DevOps", skills: skills.devops },
        { title: "Version Control", skills: skills.versionControl },
        { title: "Collaboration & Tools", skills: skills.collaboration },
        { title: "Spoken Languages", skills: skills.spokenLanguages },
        { title: "Currently Learning", skills: skills.learning },
      ].map((category, index) => (
        <Box key={index} sx={{ width: "100%", maxWidth: "900px", mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              fontFamily: poppins.style.fontFamily,
              mb: 5,
            }}
          >
            {category.title}
          </Typography>

          <Grid2 container spacing={4} justifyContent="center">
            {category.skills.map((skill, idx) => (
              <Grid2
                size={{ xs: 6, sm: 4, md: 3 }}
                key={idx}
                sx={{ textAlign: "center" }}
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontFamily: poppins.style.fontFamily }}
                >
                  {skill.name}
                </Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      ))}
    </Box>
  );
}
