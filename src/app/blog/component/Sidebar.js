"use client";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import { slugify } from "../utils/slugify";

const categories = [
  "AI",
  "Web Development",
  "Software Engineering",
  "Personal Growth",
];

export default function BlogSidebar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar Content
  const sidebarContent = (
    <Box sx={{ width: 250, p: 2 }}>
      <Button
        component={Link}
        href="/"
        variant="text"
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          textTransform: "none",
          color: "black",
          mb: 2,
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
        }}
      >
        🏠 Home
      </Button>

      <Button
        component={Link}
        href="/blog"
        variant="text"
        sx={{
          fontSize: "16px",
          textTransform: "none",
          color: "gray",
          mb: 2,
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
        }}
      >
        ← Back to Blog
      </Button>

      <Divider sx={{ mb: 2 }} />

      <List>
        {categories.map((category, index) => (
          <ListItemButton
            key={index}
            component={Link}
            href={`/blog/category/${slugify(category)}`}
          >
            <ListItemText
              primary={category}
              slotProps={{
                primary: {
                  fontSize: "16px",
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Show fixed sidebar on desktop */}
      {isDesktop && (
        <Box
          sx={{
            width: "250px",
            bgcolor: "#ffffff",
            p: 2,
            borderRight: "1px solid #ddd",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 1000,
            flexShrink: 0,
            display: "block",
          }}
        >
          {sidebarContent}
        </Box>
      )}

      {/* Show hamburger menu and drawer on mobile/tablet */}
      {!isDesktop && (
        <>
          <IconButton
            onClick={toggleDrawer}
            sx={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1100,
              backgroundColor: "#fff",
              boxShadow: 1,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 250,
              },
            }}
          >
            {sidebarContent}
          </Drawer>
        </>
      )}
    </>
  );
}
