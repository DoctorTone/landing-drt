import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
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
        <Typography>
          Adopting the latest 3D graphics technlogy on your website can elevate
          your products or applications to another level.
        </Typography>
        <Typography>We have worked with the following:</Typography>
        <Typography>See what we can do for you.</Typography>
      </Box>
    </Container>
  );
};

export default MainContent;
