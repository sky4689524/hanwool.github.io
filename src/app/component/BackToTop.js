import { useEffect, useState } from "react";
import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: visible ? "block" : "none", 
      }}
    >
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": { backgroundColor: "#f0f0f0" }, 
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Box>
  );
}
