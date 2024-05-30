import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

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
            <Link
              href="https://drt-software.com/Demos/Configurator/configurator.html"
              target="_blank"
              rel="noreferrer"
            >
              <DemoImageBlock elevation={3}>
                <Img
                  src="./images/configurator.jpg"
                  sx={{ borderRadius: "10px" }}
                />
              </DemoImageBlock>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Link href="#">
              <DemoImageBlock elevation={3}>
                <Img src="./images/solar.jpg" sx={{ borderRadius: "10px" }} />
              </DemoImageBlock>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                3D graphics are ideal for visualisation, but they are even
                better when they are used to educate. Simulations of things such
                as the solar system not only look stunning but they can highight
                some amazing facts. This simulation shows the relative sizes of
                the planets and how fast they move through space.
              </Typography>
            </DemoTextBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                Graphics technology allows you to create virtual worlds that can
                create truly engaging visitor experiences. This could be an
                alien fantasy world or a representation of a famous place that
                people all over the world want to visit. The virtual museum here
                allows visitors to browse and buy stunning pieces of art. They
                have the added bonus that they can experience the gallery in a
                virtual reality headset, making the experience even more
                immersive.
              </Typography>
            </DemoTextBlock>
          </Grid>
          <Grid item xs={6}>
            <Link href="#">
              <DemoImageBlock elevation={3}>
                <Img src="./images/museum.jpg" sx={{ borderRadius: "10px" }} />
              </DemoImageBlock>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Link
              href="https://drt-software.com/Demos/Physics/physics_demo.html"
              target="_blank"
              rel="noreferrer"
            >
              <DemoImageBlock elevation={3}>
                <Img src="./images/physics.jpg" sx={{ borderRadius: "10px" }} />
              </DemoImageBlock>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                Complex physics simulations are now possible in the browser.
                This opens up all sorts of potential applications, in areas such
                as engineering, education, gaming, earth sciences, astronomy,
                etc. This demo showcases realistic physical interactions in a
                simple game level. Enjoy!
              </Typography>
            </DemoTextBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                A classical example of 3D graphics is in the field of medical
                imaging. This was once only possible on powerful, high-end
                computers, but can now be achieved in the browser. This
                application was used to visualise a series of medical images and
                examine the structure for cancerous tumours.
              </Typography>
            </DemoTextBlock>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="https://www.drt-software.com/MedicalViz/medicalViz.html"
              target="_blank"
              rel="noreferrer"
            >
              <DemoImageBlock elevation={3}>
                <Img src="./images/brain.jpg" sx={{ borderRadius: "10px" }} />
              </DemoImageBlock>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={GRID_SPACING} sx={{ alignItems: "center" }}>
          <Grid item xs={6}>
            <Link href="#">
              <DemoImageBlock elevation={3}>
                <Img
                  src="./images/portfolio.jpg"
                  sx={{ borderRadius: "10px" }}
                />
              </DemoImageBlock>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
              <Typography>
                There is no reason why your whole website cannot be made in 3D!
                Here is a link to all the demos that I simply didn't have space
                to put on here. Please keep coming back as they will be updated
                regularly.
              </Typography>
            </DemoTextBlock>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DemoPage;
