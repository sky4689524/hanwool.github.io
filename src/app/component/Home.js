import { Typography, Box, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import poppins from "../utils/poppinsFont";

export default function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: 0.8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "5%",
            backgroundColor: "#ffffff",
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "black",
              mb: 1,
              fontFamily: poppins.style.fontFamily,
              fontWeight: "bold",
            }}
          >
            Hi, I am
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "black",
              fontFamily: poppins.style.fontFamily,
            }}
          >
            Hanwool Park
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "gray", mt: 1, fontFamily: poppins.style.fontFamily }}
          >
            Machine Learning Engineer / Full Stack Developer
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <IconButton
              sx={{ backgroundColor: "white", color: "black" }}
              href="mailto:zerg468@gmail.com"
              target="_blank"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "white", color: "black" }}
              href="https://github.com/sky4689524"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              sx={{ backgroundColor: "white", color: "black" }}
              href="https://www.linkedin.com/in/hanwool-park/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 1.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0d0d0d",
            height: "100vh",
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
            padding: "3%",
          }}
        >
          {/* Header Navigation Buttons */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontFamily: poppins.style.fontFamily,
              }}
              onClick={() => scrollToSection("about-me")}
            >
              About me
            </Button>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontFamily: poppins.style.fontFamily,
              }}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Button>
            <Button
              sx={{
                color: "white",
                textTransform: "none",
                fontFamily: poppins.style.fontFamily,
              }}
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                fontFamily: poppins.style.fontFamily,
              }}
              onClick={() => scrollToSection("contact")}
            >
              CONTACT ME
            </Button>
          </Box>

          {/* Profile Image (Centered) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/profile.png"
              alt="Profile Image"
              style={{ maxWidth: "800px", borderRadius: "10px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
