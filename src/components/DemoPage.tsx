import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const DEMO_PADDING = "5%";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
  maxHeight: "100%",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
});

const DemoPage = () => {
  return (
    <Box sx={{ mt: 10, pt: 5, pb: 5, backgroundColor: "#aaaaaa" }}>
      <Container sx={{ mb: 4 }}>
        <Typography
          sx={{ mb: 1, color: "#333333" }}
          textAlign="center"
          variant="h3"
        >
          Demos
        </Typography>
        <Typography sx={{ mb: 3 }} textAlign="center">
          (Click on the image to see the demo)
        </Typography>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ borderRadius: "20px" }}>
              <Link
                href="https://drt-software.com/Demos/Configurator/configurator.html"
                target="_blank"
                rel="noreferrer"
              >
                <Img src="./images/configurator.jpg" />
              </Link>
              <Typography sx={{ padding: DEMO_PADDING }}>
                One of the most popular applications is to showcase physical
                products. The 3D technology lets visitors see the items as if
                they were real. This lets potential customers see all your
                products up close and can give a better idea of what they are
                buying before they purchase.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ borderRadius: "20px" }}>
              <Link href="#">
                <Img src="./images/solar.jpg" />
              </Link>
              <Typography sx={{ padding: DEMO_PADDING }}>
                3D graphics are ideal for visualisation, but they are even
                better when they are used to educate. Simulations of things such
                as the solar system not only look stunning but they can highight
                some amazing facts. This simulation shows the relative sizes of
                the planets and how fast they move through space.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ borderRadius: "20px" }}>
              <Link href="#">
                <Img src="./images/museum.jpg" />
              </Link>
              <Typography sx={{ padding: DEMO_PADDING }}>
                Graphics technology allows you to create virtual worlds that can
                create truly engaging visitor experiences. This could be an
                alien fantasy world or a representation of a famous place that
                people all over the world want to visit. The virtual museum here
                allows visitors to browse and buy stunning pieces of art. They
                have the added bonus that they can experience the gallery in a
                virtual reality headset, making the experience even more
                immersive.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ borderRadius: "20px" }}>
              <Link href="#">
                <Img src="./images/physics.jpg" />
              </Link>
              <Typography sx={{ padding: DEMO_PADDING }}>
                Complex physics simulations are now possible in the browser.
                This opens up all sorts of potential applications, in areas such
                as engineering, education, gaming, earth sciences, astronomy,
                etc. This demo showcases realistic physical interactions in a
                simple game level. Enjoy!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ borderRadius: "20px" }}>
              <Link
                href="https://www.drt-software.com/MedicalViz/medicalViz.html"
                target="_blank"
                rel="noreferrer"
              >
                <Img src="./images/brain.jpg" />
              </Link>
              <Typography sx={{ padding: DEMO_PADDING }}>
                A classical example of 3D graphics is in the field of medical
                imaging. This was once only possible on powerful, high-end
                computers, but can now be achieved in the browser. This
                application was used to visualise a series of medical images and
                examine the structure for cancerous tumours.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ borderRadius: "20px" }}>
              <Link href="#">
                <Img src="./images/portfolio.jpg" />
              </Link>
              <Typography sx={{ padding: DEMO_PADDING }}>
                There is no reason why your whole website cannot be made in 3D!
                This will certainly make your site stand out from your
                competitors. Here is a link to my complete portfolio. Please
                keep coming back as they will be updated regularly.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DemoPage;
