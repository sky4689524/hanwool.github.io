import { getCachedPosts } from "../../lib/postsStore";
import BlogListClient from "../../BlogListClient";
import { Box, Typography, Paper } from "@mui/material";


export default async function SoftwareEngineeringCategoryPage() {
  const allPosts = await getCachedPosts();
  const posts = allPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes("software-engineering")
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
          Category: <strong>Software Engineering</strong>
        </Typography>

        <BlogListClient posts={posts} />
      </Paper>
    </Box>
  );
}
