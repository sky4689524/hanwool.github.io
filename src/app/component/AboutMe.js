import { Box, Typography, Grid2 } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code"; // Development Icon
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"; // Flutter App Icon
import SmartToyIcon from "@mui/icons-material/SmartToy"; // AI & Research Icon

export default function AboutMe() {
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
          mb: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}
        >
          ABOUT ME
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: "40%",
          mb: 3,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        I am a <strong>Machine Learning Engineer & Full-Stack Developer</strong>{" "}
        with a passion for{" "}
        <strong>
          {" "}
          AI-driven solutions, software development, and mobile app creation
        </strong>
        . With a <strong>Master's degree in Informatics from TUM</strong>, I
        specialize in{" "}
        <strong>
          {" "}
          AI, Deep Learning, Full-Stack Web Development, and Mobile App
          Development
        </strong>
        .
      </Typography>

      {/* Separator Image */}
      <Box
        component="img"
        src="/separatorBlack.png"
        alt="Separator"
        sx={{
          width: "150px",
          maxWidth: "100%",
          height: "auto",
          marginBottom: "40px",
        }}
      />

      {/* Grid2 Table Layout Without Borders */}
      <Grid2
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "900px" }}
      >
        {/* First Row: Icons */}
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
          <SmartToyIcon sx={{ fontSize: 50, color: "#b3b3b3" }} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
          <CodeIcon sx={{ fontSize: 50, color: "#b3b3b3" }} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
          <PhoneIphoneIcon sx={{ fontSize: 50, color: "#b3b3b3" }} />
        </Grid2>

        {/* Second Row: Titles */}
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center", mt: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            AI & RESEARCH
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center", mt: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            FULL-STACK DEVELOPMENT
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center", mt: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            MOBILE APP DEVELOPMENT
          </Typography>
        </Grid2>

        {/* Third Row: Descriptions */}
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              maxWidth: "280px",
              margin: "auto",
            }}
          >
            I specialize in <strong>AI, Deep Learning, and NLP</strong>. My
            expertise includes{" "}
            <strong>computer vision, data science and NLP</strong>, delivering
            real-world AI solutions with high-impact applications.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              maxWidth: "280px",
              margin: "auto",
            }}
          >
            I build <strong>scalable web applications</strong> using
            <strong> React, Next.js, Flask, and FastAPI</strong>. I ensure
            high-performance, responsive, and user-friendly digital experiences
            with optimized backend and front-end solutions.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              maxWidth: "280px",
              margin: "auto",
            }}
          >
            I develop <strong>cross-platform mobile applications</strong> for
            <strong> iOS & Android</strong> using Flutter. My experience
            includes
            <strong>
              {" "}
              UI/UX design, API integration, performance optimization,
            </strong>
            and <strong>publishing apps</strong> on the App Store and Google
            Play.
          </Typography>
        </Grid2>
      </Grid2>

      <Box
        component="img"
        src="/separatorBlack.png"
        alt="Separator"
        sx={{
          width: "150px",
          maxWidth: "100%",
          height: "auto",
          marginTop: "40px",
        }}
      />
    </Box>
  );
}
