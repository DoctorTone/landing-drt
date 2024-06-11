import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxHeight: "100%",
});

export const Testimonials = () => {
  return (
    <Container
      sx={{
        mt: 10,
        mb: 2,
        backgroundColor: "#dfe09d",
        borderRadius: "20px",
      }}
    >
      <Typography variant="h6" sx={{ color: "black", textAlign: "center" }}>
        A few people that I've helped along the way...
      </Typography>
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
      <Typography variant="h6" sx={{ color: "black", textAlign: "center" }}>
        and plenty more to come...
      </Typography>
    </Container>
  );
};
