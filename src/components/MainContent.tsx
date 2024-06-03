import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const MainContent = () => {
  return (
    <Container sx={{ mt: 3, mb: 5 }} maxWidth="xl">
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={5}>
            <Typography sx={{ mb: 5 }} variant="h3" align="center">
              Unleash the power of 3D.
            </Typography>
            <Typography variant="h6" align="center">
              More engaging interaction, enhanced user experiences and increased
              sales for your website.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Img src="./images/3DTextShadow2.png" />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography textAlign="center" sx={{ mb: 3 }}>
          Adopting the latest 3D graphics technlogy on your website can elevate
          your products or applications to another level.
        </Typography>
      </Box>
      <Grid container sx={{ ml: "10%" }}>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">Showcase products on your site</Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">
              Visualise and share complex data
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">
              Create virtual exhibits and experiences
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">Simulate other worlds</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ ml: "10%" }}>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">
              Build architectural fly-throughs
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">
              Increased immersion with virtual reality
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">
              Train repetitive and hazardous taks
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} md={6} sx={{ ml: { xs: "10%", md: 0 } }}>
          <Box sx={{ display: "flex" }}>
            <BoltIcon fontSize="large" color="primary" />
            <Typography variant="h6">
              Get an edge over your competition
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography textAlign="center">
          The application areas are <strong>huge</strong>. I've helped both
          large and small commercial companies, start-ups and academia and I can
          help you too.
        </Typography>
      </Box>
      {/* <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Img src="./images/logo_uon.png" />
        <Img src="./images/artxr_full_XR.png" />
        <Img src="./images/iosh-logo.png" />
        <Img src="./images/kp.png" />
      </Box> */}
    </Container>
  );
};

export default MainContent;
