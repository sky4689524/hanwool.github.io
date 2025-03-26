import { Box, Typography, IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import poppins from "../utils/poppinsFont";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#131313",
        color: "white",
        textAlign: "center",
        padding: "30px 20px",
      }}
    >
      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        {/* X (Twitter) */}
        <IconButton
          href="https://x.com/hanwoolpark2426"
          target="_blank"
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
            p: 1,
          }}
        >
          <XIcon />
        </IconButton>

        {/* LinkedIn */}
        <IconButton
          href="https://linkedin.com/in/hanwool-park"
          target="_blank"
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
            p: 1,
          }}
        >
          <LinkedInIcon />
        </IconButton>

        {/* GitHub */}
        <IconButton
          href="https://github.com/sky4689524"
          target="_blank"
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
            p: 1,
          }}
        >
          <GitHubIcon />
        </IconButton>

        {/* Email */}
        <IconButton
          href="mailto:zerg468@gmail.com"
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: "50%",
            p: 1,
          }}
        >
          <EmailIcon />
        </IconButton>
      </Box>

      {/* Copyright Info */}
      <Typography
        variant="body2"
        sx={{ opacity: 0.8, fontFamily: poppins.style.fontFamily }}
      >
        ©2025 <b>Hanwool Park</b> All Rights Reserved.
      </Typography>
    </Box>
  );
}
