"use client";

import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1300,
          backgroundColor: "black",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      >
        <MenuIcon sx={{ fontSize: 32 }} />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 220,
            height: "100vh",
            background: "black",
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          role="presentation"
          onClick={toggleDrawer}
        >
          <List sx={{ width: "100%" }}>
            {/* Home Link */}
            <ListItem
              component="a"
              href="/"
              sx={{
                textAlign: "center",
                py: 3,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Home
                  </Typography>
                }
              />
            </ListItem>

            {/* Blog Link */}
            <ListItem
              component="a"
              href="/blog"
              sx={{
                textAlign: "center",
                py: 3,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Blog
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
