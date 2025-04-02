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
  Stack,
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
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Posts
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "gray",
            mb: 2,
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
          }}
        >
          Total Posts: {totalPosts}
        </Typography>

        <List disablePadding>
          {currentPosts.map((post) => (
            <ListItemButton
              key={post.filename}
              component={Link}
              href={`/blog/posts/${post.filename}`}
              sx={{
                mb: 2,
                px: { xs: 1.5, md: 2 },
                py: { xs: 1, md: 1.5 },
                alignItems: "flex-start",
              }}
            >
              <Stack spacing={0.5} width="100%">
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                    color: "gray",
                  }}
                >
                  {format(new Date(post.date), "yyyy-MM-dd")}
                </Typography>
                <Typography
                  variant="body3"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.8rem" },
                    color: "#666",
                    wordWrap: "break-word",
                  }}
                >
                  {post.tags.join(", ")}
                </Typography>
              </Stack>
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
              sx={{
                minWidth: 32,
                fontSize: "1rem",
                color: "black",
                border: "none",
                borderBottom:
                  i + 1 === currentPage
                    ? "2px solid black"
                    : "2px solid transparent",
                borderRadius: 0,
                paddingBottom: "2px",
                fontWeight: i + 1 === currentPage ? 600 : 400,
                bgcolor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "2px solid black",
                },
              }}
            >
              {i + 1}
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
