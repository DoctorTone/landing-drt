import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const NavBar = () => {
  return (
    <Box
      sx={{
        marginLeft: 5,
        marginRight: 5,
        display: "flex",
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "#52477a",
          borderRadius: "10px",
        }}
        position="static"
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Typography variant="h6">News</Typography>
            <Typography variant="h6">Services</Typography>
            <Typography variant="h6">About</Typography>
            <Typography variant="h6">Contact</Typography>
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
