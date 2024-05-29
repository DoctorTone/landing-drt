import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const DemoImageBlock = styled(Paper)({
borderRadius: "20px"
});

const DemoTextBlock = styled(Paper)({
  padding: "5%",
  borderRadius: "10px"
  });

const DemoPage = () => {
  return (
    <Box sx={{ mt: 10, pt: 5, pb: 5, backgroundColor: "grey" }}>
      <Container sx={{mb: 4}}>
        <Typography textAlign="center" variant="h3">
          Demos
        </Typography>
        <Grid container spacing={50}>
          <Grid item xs={6}>
            <DemoTextBlock elevation={3}>
            <Typography>One of the most popular applications is to showcase physical products. The 3D technology lets visitors see the items as if they were real. This lets potential customers see all your products up close and can give a better idea of what they are buying before they purchase.</Typography>
            </DemoTextBlock>
          </Grid>
          <Grid item xs={6}>
            <DemoImageBlock elevation={3}>
            <Img src="./images/configurator.jpg" />
            </DemoImageBlock>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{mb: 4}}>
        <Grid container spacing={50}>
          <Grid item xs={6}>
            <Paper elevation={3}>
            <Img src="./images/solar.jpg" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
            <Typography>One of the most popular applications is to showcase physical products</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{mb: 4}}>
        <Grid container spacing={50}>
          <Grid item xs={6}>
            <Paper elevation={3}>
            <Typography>One of the most popular applications is to showcase physical products</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
            <Img src="./images/drt.jpg" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{mb: 4}}>
        <Grid container spacing={50}>
          <Grid item xs={6}>
            <Paper elevation={3}>
            <Img src="./images/drt.jpg" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
            <Typography>One of the most popular applications is to showcase physical products</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DemoPage;
