import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxHeight: "100%",
});

export const Testimonials = () => {
  return (
    <Box component="div" sx={{ backgroundColor: "black", pt: 1, pb: 2 }}>
      <Typography variant="h6" sx={{ color: "orange", textAlign: "center" }}>
        A few people that I've helped along the way...
      </Typography>
      <Container
        sx={{
          mt: 2,
          mb: 2,
          backgroundColor: "#f3c13a",
          borderRadius: "20px",
          padding: "1.5% 0",
        }}
      >
        <Grid container sx={{ padding: "2% 0" }}>
          <Grid item xs={3}>
            <Img src="./images/logo_uon.png" />
          </Grid>
          <Grid item xs={3}>
            <Img src="./images/iosh-logo.png" />
          </Grid>
          <Grid item xs={3}>
            <Img src="./images/ThrillLabLogo.jpg" />
          </Grid>
          <Grid item xs={3}>
            <Img src="./images/logo_imh2.png" />
          </Grid>
        </Grid>
      </Container>
      <Typography variant="h6" sx={{ color: "grey", textAlign: "center" }}>
        and plenty more to come...
      </Typography>
    </Box>
  );
};
