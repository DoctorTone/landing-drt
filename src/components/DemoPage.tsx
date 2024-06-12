import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
  maxHeight: "100%",
  borderRadius: "20px",
});

const DemoPage = () => {
  return (
    <Box component="div" sx={{ pt: 5, pb: 5, backgroundColor: "#333333" }}>
      <Container sx={{ mb: 4 }} maxWidth="xl">
        <Typography
          sx={{ mb: 1, color: "orange" }}
          textAlign="center"
          variant="h4"
        >
          <a id="demos_page"></a>
          Explore the latest examples
        </Typography>
        <Typography sx={{ mb: 3, color: "grey" }} textAlign="center">
          (Click on the image to see the demo)
        </Typography>
        <Grid container spacing="10" sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={2}>
            <Paper sx={{ borderRadius: "20px", mb: 1 }}>
              <Link
                href="https://drt-software.com/Demos/Configurator/"
                target="_blank"
                rel="noreferrer"
              >
                <Img src="./images/configurator.jpg" />
              </Link>
            </Paper>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
              3D Configurators
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={2}>
            <Paper sx={{ borderRadius: "20px", mb: 1 }}>
              <Link
                href="https://drt-software.com/Demos/Solar"
                target="_blank"
                rel="noreferrer"
              >
                <Img src="./images/solar.jpg" />
              </Link>
            </Paper>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
              Simulation
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={2}>
            <Paper sx={{ borderRadius: "20px", mb: 1 }}>
              {/* <Link href=""> */}
              <Img src="./images/museum.jpg" />
              {/* </Link> */}
            </Paper>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
              Virtual Exhibits
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={2}>
            <Paper sx={{ borderRadius: "20px", mb: 1 }}>
              <Link
                href="https://drt-software.com/Demos/Physics/"
                target="_blank"
                rel="noreferrer"
              >
                <Img src="./images/physics.jpg" />
              </Link>
            </Paper>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
              Physics
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={2}>
            <Paper sx={{ borderRadius: "20px", mb: 1 }}>
              <Link
                href="https://www.drt-software.com/MedicalViz/"
                target="_blank"
                rel="noreferrer"
              >
                <Img src="./images/brain.jpg" />
              </Link>
            </Paper>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
              Data Visualisation
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={2}>
            <Paper sx={{ borderRadius: "20px", mb: 1 }}>
              <Link
                href="https://www.drt-software.com/Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <Img src="./images/portfolio.jpg" />
              </Link>
            </Paper>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
              3D Websites
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing="50" sx={{ justifyContent: "center" }}></Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing="50" sx={{ justifyContent: "center" }}></Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}></Grid>
      </Container>
    </Box>
  );
};

export default DemoPage;
