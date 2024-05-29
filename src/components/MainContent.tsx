import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";
import { Paper } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ProductBlock = styled(Paper)({
  padding: "1%",
});

const MainContent = () => {
  return (
    <Container sx={{ mt: 10, mb: 5 }} maxWidth="xl">
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={5}>
            <Typography sx={{ mb: 5 }} variant="h3" align="center">
              Unleash the power of 3D.
            </Typography>
            <Typography variant="h6" align="center">
              More engaging interaction, enhanced user experiences and increased
              sales for your website.
            </Typography>
          </Grid>
          <Grid item xs={7}>
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
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <BoltIcon fontSize="large" color="primary" />
        <Typography variant="h6">Showcase products on your site</Typography>
        <BoltIcon fontSize="large" color="primary" />
        <Typography variant="h6">Build architectural fly-throughs</Typography>
        <BoltIcon fontSize="large" color="primary" />
        <Typography variant="h6">Visualise and share complex data</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <BoltIcon fontSize="large" color="primary" />
        <Typography variant="h6">Simulate other worlds</Typography>
        <BoltIcon fontSize="large" color="primary" />
        <Typography variant="h6">
          Create virtual exhibits and experiences
        </Typography>
        <BoltIcon fontSize="large" color="primary" />
        <Typography variant="h6">
          Train repetitive and hazardous taks
        </Typography>
      </Box>
      <Box>
        <Typography textAlign="center">
          The application areas are huge. Here are some of the people that we
          have helped:
        </Typography>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default MainContent;
