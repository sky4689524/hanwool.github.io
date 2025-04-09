import { Typography, Box, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (section) => {
    if (section === "blog") {
      window.open("https://tech-noobie.tistory.com/", "_blank");
    } else {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        router.push(`/#${section}`);
      }
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
            padding: { xs: "20px", sm: "40px", md: "5%" },
            backgroundColor: "#ffffff",
            clipPath: {
              xs: "none",
              md: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "black",
              mb: 1,
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "18px", md: "24px" },
            }}
          >
            Hi, I am
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              color: "black",
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "32px", sm: "42px", md: "60px" },
            }}
          >
            Hanwool Park
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "gray",
              mt: 1,
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
            }}
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
            clipPath: {
              xs: "none",
              md: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
            },
            padding: { xs: "20px", md: "3%" },
          }}
        >
          {/* Navigation Buttons */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: { xs: 0.5, sm: 1, md: 1.5 },
              flexWrap: "wrap",
              mt: { xs: 2, md: 0 },
            }}
          >
            {["home", "about-me", "skills", "portfolio", "contact"].map(
              (section) => (
                <Button
                  key={section}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "9px", sm: "16px", md: "16px" },
                    paddingX: { xs: "4px", sm: "6px", md: "10px" },
                    paddingY: { xs: "3px", sm: "4px", md: "6px" },
                    minWidth: "auto",
                  }}
                  onClick={() => handleNavigation(section)}
                >
                  {section.replace("-", " ").toUpperCase()}
                </Button>
              )
            )}

            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "9px", sm: "16px", md: "16px" },
                paddingX: { xs: "6px", sm: "8px", md: "12px" },
                paddingY: { xs: "3px", sm: "4px", md: "6px" },
                minWidth: "auto",
              }}
              onClick={() => handleNavigation("blog")}
            >
              BLOG
            </Button>
          </Box>

          {/* Profile Image */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mt: { xs: 4, md: 0 },
            }}
          >
            <img
              src="/profile.png"
              alt="Profile Image"
              style={{
                width: "100%",
                maxWidth: "700px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
