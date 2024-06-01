import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const NavBar = () => {
  const handleOpenNavMenu = () => {};

  return (
    <Box
      sx={{
        marginLeft: 5,
        marginRight: 5,
        display: "flex",
      }}
    >
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: "#eeeeee",
          color: "black",
        }}
        position="static"
      >
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Img src="./images/drtLogo.png" />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              paddingTop: "5px",
              paddingBottom: "5px",
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Img src="./images/drtLogo.png" />
            <Typography
              variant="h6"
              component="a"
              href="#services_page"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Services
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="#about_page"
              sx={{ textDecoration: "none", color: "black" }}
            >
              About
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="#contact_page"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Typography>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Portfolio
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexGrow: 0, ml: "auto" }}>
            <Button variant="contained">Schedule call</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
