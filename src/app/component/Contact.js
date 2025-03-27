import { Box, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f7f7f7, #e3e3e3)",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
        color : "black"
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          border: "2px solid black",
          padding: "10px 30px",
          display: "inline-block",
          marginBottom: "20px",
          mb : 5
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          CONTACT
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "60%",
          mb: 3,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        I’m open to <strong>collaborations, freelance projects,</strong> and
        exciting opportunities. Whether you need a developer for an innovative
        project or want to discuss potential partnerships, feel free to reach
        out. You can contact me through the links in the footer.
      </Typography>

      {/* Animated Arrow */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          animation: "bounce 1.5s infinite",
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(10px)" },
          },
        }}
      >
        <Typography variant="h2">↓</Typography>
      </Box>
    </Box>
  );
}
