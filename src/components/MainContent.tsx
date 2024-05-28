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
    <Container sx={{ mt: 10 }} maxWidth="xl">
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography variant="h2">Unleash the power of 3D</Typography>
          </Grid>
          <Grid item xs={8}>
            <Img src="./images/3DText.jpg" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainContent;
