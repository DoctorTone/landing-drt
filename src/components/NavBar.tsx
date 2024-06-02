import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        paddingTop: 2,
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
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Services</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            </Menu>
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
              href="https://drt-software.com/Portfolio/portfolio.html"
              target="_blank"
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
