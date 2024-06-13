import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
});

export const Testimonials = () => {
  return (
    <Container component="div" sx={{ backgroundColor: "black", pt: 1, pb: 2 }}>
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
        <Grid container spacing={5} alignItems="center" sx={{ padding: "2%" }}>
          <Grid item xs={6} sm={3}>
            <Img src="./images/logo_uon.png" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Img src="./images/iosh.png" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Img src="./images/ThrillLabLogo_scaled.jpg" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Img src="./images/logo_imh2_scaled.png" />
          </Grid>
        </Grid>
      </Container>
      <Typography variant="h6" sx={{ color: "grey", textAlign: "center" }}>
        and plenty more to come...
      </Typography>
    </Container>
  );
};
