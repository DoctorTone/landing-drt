import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "@mui/material/Link";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="div"
      sx={{ pt: 3, pb: 5, backgroundColor: "#222222", color: "orange" }}
    >
      <Box component="div" sx={{ display: { xs: "block", md: "none" } }}>
        <Stack alignItems="center" sx={{ mb: 2 }}>
          <LocationOnIcon fontSize="large" color="warning" />
        </Stack>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "center", ml: 2, mb: 1 }}
        >
          <CopyrightIcon sx={{ mr: 1 }} />
          <Typography>DRT Software Ltd 2024</Typography>
        </Box>
        <Typography
          sx={{ display: "flex", justifyContent: "center", ml: 2, mb: 1 }}
        >
          1 Highfield Drive, Nuthall, Nottingham
        </Typography>
        <Typography
          sx={{ display: "flex", justifyContent: "center", ml: 2, mb: 1 }}
        >
          Company No: 09710237
        </Typography>
        <Typography
          sx={{ display: "flex", justifyContent: "center", ml: 2, mb: 1 }}
        >
          VAT No: 331 7022 43
        </Typography>
      </Box>
      <Box component="div" sx={{ display: { xs: "none", md: "block" } }}>
        <Stack alignItems="center" sx={{ mb: 2 }}>
          <LocationOnIcon fontSize="large" color="warning" />
        </Stack>
        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
          <Box component="div" sx={{ display: "flex", alignContent: "center" }}>
            <CopyrightIcon sx={{ mr: 1 }} />
            <Typography>DRT Software Ltd 2024</Typography>
          </Box>
          <MoreVertIcon />
          <Typography>1 Highfield Drive, Nuthall, Nottingham</Typography>
          <MoreVertIcon />
          <Typography>Company No: 09710237</Typography>
          <MoreVertIcon />
          <Typography>VAT No: 331 7022 43</Typography>
        </Box>
      </Box>
      <Box component="div" sx={{ mt: 2 }}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Link
            sx={{ mr: 5 }}
            href="https://twitter.com/DrtSoftware"
            target="_blank"
            rel="noreferrer"
          >
            <XIcon fontSize="large" sx={{ color: "white" }} />
          </Link>
          <Link
            sx={{ mr: 5 }}
            href="https://www.youtube.com/channel/UCNYHLpd8oKLoE2xw49ZX1nQ"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon fontSize="large" color="error" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tonyglover"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
