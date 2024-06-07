import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { RenderCanvas } from "./RenderCanvas";

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
            <Typography variant="h6" align="center" sx={{ color: "grey" }}>
              More engaging interaction, enhanced user experiences and increased
              sales for your website.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <RenderCanvas />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography textAlign="center" sx={{ mb: 3 }}>
          Adopting the latest 3D graphics technlogy on your website can elevate
          your products or applications to another level.
        </Typography>
      </Box>
      <Grid container sx={{ pl: { xs: 0, sm: "12%", md: "10%" } }}>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Showcase products on your site
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Visualise and share data
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Create virtual exhibits and experiences
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Simulate other worlds
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ pl: { xs: 0, sm: "12%", md: "10%" } }}>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Build architectural fly-throughs
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Increased immersion with virtual reality
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Train repetitive/hazardous taks
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ display: "flex" }}>
            <DoneIcon fontSize="large" color="warning" />
            <Typography variant="h6" sx={{ color: "grey" }}>
              Gain a competitive edge
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, mb: 4 }}>
        <Typography textAlign="center">
          The application areas are <strong>huge</strong>. I've helped both
          large and small companies, start-ups and academia and I can help you
          too.
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
