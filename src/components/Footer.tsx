import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Footer = () => {
  return (
    <Box sx={{ pt: 3, pb: 5, backgroundColor: "#222222", color: "orange" }}>
      <Stack alignItems="center" sx={{ mb: 2 }}>
        <LocationOnIcon fontSize="large" color="warning" />
      </Stack>
      <Grid container>
        <Grid item xs={5} sx={{ display: "flex" }}>
          <CopyrightIcon sx={{ mr: 1 }} />
          <Typography>DRT Software Ltd 2024</Typography>
        </Grid>
        <Grid item xs={1}>
          <MoreVertIcon />
        </Grid>
        <Grid item xs={6}>
          <Typography>1 Highfield Drive, Nuthall, Nottingham</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <Typography>Company No: 09710237</Typography>
        </Grid>
        <Grid item xs={1}>
          <MoreVertIcon />
        </Grid>
        <Grid item xs={6}>
          <Typography>VAT No: 331 7022 43</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
