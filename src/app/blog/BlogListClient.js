"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Paper,
} from "@mui/material";
import { format } from "date-fns";

export default function BlogListClient({ posts }) {
  const totalPosts = posts.length;
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <Box sx={{ flex: 1, p: { xs: 2, md: 4 } }}>
      <Paper sx={{ p: { xs: 2, md: 4 }, bgcolor: "#fff" }}>
        <Typography variant="h4" gutterBottom>
          Posts
        </Typography>

        <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
          Total Posts: {totalPosts}
        </Typography>

        <List>
          {currentPosts.map((post) => (
            <ListItemButton
              key={post.slug}
              component={Link}
              href={`/blog/${post.slug}`}
              sx={{ mb: 2 }}
            >
              <ListItemText
                primary={post.title}
                secondary={format(new Date(post.date), "yyyy-MM-dd")}
              />
              <Typography variant="body2" sx={{ color: "gray" }}>
                {post.tags.join(", ")}
              </Typography>
            </ListItemButton>
          ))}
        </List>

        {/* Pagination */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 1 }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              size="small"
              color="black"
            >
              {i + 1}
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
