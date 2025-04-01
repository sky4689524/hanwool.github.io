import BlogSidebar from "./component/Sidebar";
import { Box } from "@mui/material";

export default function BlogLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <BlogSidebar />
      <Box
        component="main"
        sx={{
          flex: 1,
          ml: { md: "250px" }, // Reserve space for fixed sidebar
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
