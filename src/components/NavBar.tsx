import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
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
    <Container>
      <Box component="div">
        <AppBar
          className="sticky"
          elevation={0}
          sx={{
            backgroundColor: "black",
            borderRadius: "10px",
            color: "orange",
            width: { xs: "90%", sm: "70%", md: "90%", lg: "75%" },
            left: { xs: "5%", sm: "17.5%", md: "5%", lg: "12.5%" },
            marginTop: "10px",
          }}
        >
          <Toolbar>
            <Box component="div" sx={{ display: { xs: "flex", md: "none" } }}>
              <Img src="./images/drtLogo.png" />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="warning"
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  component="a"
                  href="#demos_page"
                  onClick={handleClose}
                >
                  Examples
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#services_page"
                  onClick={handleClose}
                >
                  Services
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#about_page"
                  onClick={handleClose}
                >
                  About
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#contact_page"
                  onClick={handleClose}
                >
                  Contact
                </MenuItem>
                <MenuItem
                  component="a"
                  href="https://drt-software.com/Portfolio/"
                  target="_blank"
                  onClick={handleClose}
                >
                  Portfolio
                </MenuItem>
              </Menu>
            </Box>
            <Box
              component="div"
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
                href="#demos_page"
                sx={{ textDecoration: "none", color: "orange" }}
              >
                Examples
              </Typography>
              <Typography
                variant="h6"
                component="a"
                href="#services_page"
                sx={{ textDecoration: "none", color: "orange" }}
              >
                Services
              </Typography>
              <Typography
                variant="h6"
                component="a"
                href="#about_page"
                sx={{ textDecoration: "none", color: "orange" }}
              >
                About
              </Typography>
              <Typography
                variant="h6"
                component="a"
                href="#contact_page"
                sx={{ textDecoration: "none", color: "orange" }}
              >
                Contact
              </Typography>
              <Typography
                variant="h6"
                component="a"
                href="https://drt-software.com/Portfolio/"
                target="_blank"
                sx={{ textDecoration: "none", color: "orange" }}
              >
                Portfolio
              </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex", ml: "auto" }}>
              <Button
                component="a"
                href="https://calendly.com/tony-mdjh/30min"
                target="_blank"
                variant="contained"
              >
                Schedule a call
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default NavBar;
