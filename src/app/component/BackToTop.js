import { useEffect, useState } from "react";
import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
      <a href="#home" style={{ textDecoration: "none" }}>
        <Fab
          color="primary"
          size="medium"
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      </a>
    </Box>
  );
}
