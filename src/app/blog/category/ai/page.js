import { getAllPosts } from "../../lib/getMarkdownPosts";
import BlogListClient from "../../BlogListClient";
import { Box, Typography, Paper } from "@mui/material";

export default async function AICategoryPage() {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes("ai")
  );

  return (
    <Box>
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          bgcolor: "transparent",
          boxShadow: "none",
          border: "none",
        }}
      >
        <Typography sx={{ color: "gray", mb: 2 }}>
          Category: <strong>AI</strong>
        </Typography>

        <BlogListClient posts={posts} />
      </Paper>
    </Box>
  );
}
