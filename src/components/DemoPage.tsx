import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

const GRID_SPACING = 30;
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const DemoImageBlock = styled(Paper)({
  borderRadius: "20px",
});

const DemoTextBlock = styled(Paper)({
  padding: "5%",
  borderRadius: "10px",
});

const DemoPage = () => {
  return (
    <Box sx={{ mt: 10, pt: 5, pb: 5, backgroundColor: "grey" }}>
      <Container sx={{ mb: 4 }}>
        <Typography sx={{ mb: 1 }} textAlign="center" variant="h3">
          Demos
        </Typography>
        <Typography sx={{ mb: 1 }} textAlign="center" variant="h5">
          Seeing is believing...
        </Typography>
        <Typography sx={{ mb: 3 }} textAlign="center">
          (Click on image to go to demo)
        </Typography>
        <Grid container spacing={GRID_SPACING} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                One of the most popular applications is to showcase physical
                products. The 3D technology lets visitors see the items as if
                they were real. This lets potential customers see all your
                products up close and can give a better idea of what they are
                buying before they purchase.
              </Typography>
            </DemoTextBlock>
          </Grid>
          <Grid item xs={6}>
            <DemoImageBlock elevation={3}>
              <Img
                src="./images/configurator.jpg"
                sx={{ borderRadius: "10px" }}
              />
            </DemoImageBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <DemoImageBlock elevation={3}>
              <Img src="./images/solar.jpg" sx={{ borderRadius: "10px" }} />
            </DemoImageBlock>
          </Grid>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                Not only are 3D graphics ideal for visualisation, they are
                highly interactive and can simulate all manner of processes.
                Here we can see a simulation of the solar system that
                illustrates the relative sizes of all the planets and how
                quickly they rotate and move in relation to one another.
              </Typography>
            </DemoTextBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING}>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                One of the most popular applications is to showcase physical
                products
              </Typography>
            </DemoTextBlock>
          </Grid>
          <Grid item xs={6}>
            <DemoImageBlock elevation={3}>
              <Img src="./images/museum2.jpg" sx={{ borderRadius: "10px" }} />
            </DemoImageBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING}>
          <Grid item xs={6}>
            <DemoImageBlock elevation={3}>
              <Img src="./images/drt.jpg" />
            </DemoImageBlock>
          </Grid>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                One of the most popular applications is to showcase physical
                products
              </Typography>
            </DemoTextBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING}>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                One of the most popular applications is to showcase physical
                products
              </Typography>
            </DemoTextBlock>
          </Grid>
          <Grid item xs={6}>
            <DemoImageBlock elevation={3}>
              <Img src="./images/drt.jpg" />
            </DemoImageBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING}>
          <Grid item xs={6}>
            <DemoImageBlock elevation={3}>
              <Img src="./images/drt.jpg" />
            </DemoImageBlock>
          </Grid>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                One of the most popular applications is to showcase physical
                products
              </Typography>
            </DemoTextBlock>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DemoPage;
