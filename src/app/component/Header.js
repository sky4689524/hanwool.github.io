import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", backgroundColor: "black" }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Left Section  */}
        <Box
          sx={{
            flex: 2.0,
            backgroundColor: "#ffffff",
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)",
          }}
        ></Box>

        {/* Right Section  */}
        <Box
          sx={{
            flex: 1.6,
            backgroundColor: "black",
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "5%",
          }}
        >
          <Toolbar sx={{ gap: 2 }}>
            <Button sx={{ color: "white", textTransform: "none" }}>
              About me
            </Button>
            <Button sx={{ color: "white", textTransform: "none" }}>
              Skills
            </Button>
            <Button sx={{ color: "white", textTransform: "none" }}>
              Portfolio
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
              }}
            >
              CONTACT ME
            </Button>
          </Toolbar>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
