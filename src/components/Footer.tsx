import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Footer = () => {
  return (
    <Box sx={{ pt: 3, pb: 5, backgroundColor: "#222222", color: "orange" }}>
      <Container>
        <Stack alignItems="center" sx={{ mb: 2 }}>
          <LocationOnIcon fontSize="large" color="warning" />
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CopyrightIcon sx={{ mr: 1 }} />
          <Typography>DRT Software Ltd 2024</Typography>
          <MoreVertIcon />
          <Typography>1 Highfield Drive, Nuthall, Nottingham</Typography>
          <MoreVertIcon />
          <Typography>Company No: 09710237</Typography>
          <MoreVertIcon />
          <Typography>VAT No: 331 7022 43</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
