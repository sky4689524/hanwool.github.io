"use client";
import { useState, Suspense } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import portfolioItems from "../portfolio/portfolioItems";

export default function Portfolio() {
  const [tab, setTab] = useState("all");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [ProjectComponent, setProjectComponent] = useState(null);

  const handleOpenDialog = async (item) => {
    setSelectedItem(item);
    try {
      const module = await import(`../portfolio/${item.id}.js`);
      setProjectComponent(() => module.default);
    } catch (error) {
      console.error("Failed to load project component:", error);
      setProjectComponent(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setProjectComponent(null);
  };

  const allItems = [...portfolioItems.projects, ...portfolioItems.others];
  const getItemsByTab = (tab) => {
    if (tab === "all") return allItems;
    return portfolioItems[tab] || [];
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f7f7f7, #e3e3e3)",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
        color : "black"
      }}
    >
      <Box
        sx={{
          border: "2px solid black",
          padding: "10px 30px",
          display: "inline-block",
          marginBottom: "20px",
          mb: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Portfolio
        </Typography>
      </Box>

      <Tabs
        value={tab}
        onChange={(event, newValue) => setTab(newValue)}
        sx={{
          marginBottom: "20px",
          "& .MuiTabs-indicator": { backgroundColor: "black" },
          "& .MuiTab-root": {
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            color: "black",
            textTransform: "uppercase",
          },
          "& .Mui-selected": { color: "black" },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="Projects" value="projects" />
        <Tab label="Others" value="others" />
      </Tabs>

      {/* Horizontal Scroll Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          px: 2,
        }}
      >
        {/* Scrollable Row */}
        <Box
          id="scroll-container"
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 3,
            pb: 1,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {(() => {
            const currentItems = getItemsByTab(tab);
            return currentItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "260px",
                  maxWidth: "260px",
                  marginLeft: index === 0 ? "auto" : 0,
                  marginRight: index === currentItems.length - 1 ? "auto" : 0,
                  background: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  flexShrink: 0,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": {
                    boxShadow: "4px 4px 15px rgba(0,0,0,0.2)",
                  },
                }}
                onClick={() => handleOpenDialog(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    fontFamily: "Poppins, sans-serif",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                {item.tags && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      flexWrap: "wrap",
                      mb: 2,
                    }}
                  >
                    {item.tags.map((tag, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          backgroundColor: "#f4f1e8",
                          color: "#5c5248",
                          fontSize: "10px",
                          px: 1,
                          py: 0.5,
                          borderRadius: "6px",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                )}

                {item.dateRange && (
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: "12px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {item.dateRange}
                  </Typography>
                )}
              </Box>
            ));
          })()}
        </Box>

        {/* Scroll Left Button */}
        <IconButton
          onClick={() => {
            const container = document.getElementById("scroll-container");
            const scrollAmount = 300;
            const currentScroll = container.scrollLeft;

            if (currentScroll <= scrollAmount) {
              // If we're close to the beginning, snap to start
              container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              container.scrollTo({
                left: currentScroll - scrollAmount,
                behavior: "smooth",
              });
            }
          }}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>◀</span>
        </IconButton>

        {/* Scroll Right Button */}
        <IconButton
          onClick={() => {
            const container = document.getElementById("scroll-container");
            const scrollAmount = 300;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const currentScroll = container.scrollLeft;

            if (currentScroll + scrollAmount >= maxScrollLeft) {
              // If near end, snap to the max
              container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            } else {
              container.scrollTo({
                left: currentScroll + scrollAmount,
                behavior: "smooth",
              });
            }
          }}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: "1px 1px 5px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>➤</span>
        </IconButton>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedItem && (
          <>
            <DialogTitle
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                position: "relative",
              }}
            >
              <IconButton
                onClick={handleCloseDialog}
                sx={{ position: "absolute", right: 10, top: 10 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Suspense fallback={<Typography>Loading...</Typography>}>
                {ProjectComponent ? (
                  <ProjectComponent />
                ) : (
                  <Typography>Error loading project.</Typography>
                )}
              </Suspense>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
