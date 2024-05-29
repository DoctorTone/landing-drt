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

const DemoPage = () => {
  return (
    <Box sx={{ mt: 10, pt: 5, backgroundColor: "grey" }}>
      <Container sx={{mb: 4}}>
        <Typography textAlign="center" variant="h3">
          Demos
        </Typography>
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
      <Container>
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
